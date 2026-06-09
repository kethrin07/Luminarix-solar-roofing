'use client'

interface Props {
  navSteps: string[]
  activeStep: string
  services: string[]
  allData: any
  onBack: () => void
  onSubmit: () => void
}

// ── CALCULATION CONSTANTS ──
const COST_PER_WATT = 3.0           // $3/watt installed (CA avg)
const BATTERY_POWERWALL_COST = 15750 // Tesla Powerwall 3
const BATTERY_ENPHASE_COST = 12000   // Enphase 10C
const FEDERAL_TAX_CREDIT = 0.30      // 30% ITC
const ROOF_COST_PER_SQFT: Record<string, number> = {
  shingles: 4.5,
  tile: 7.5,
  metal: 9.0,
  flat: 5.5,
}
const PITCH_MULTIPLIER: Record<string, number> = {
  flat: 1.0,
  low: 1.1,
  conventional: 1.2,
  steep: 1.35,
}
const LOAN_RATE = 0.0699   // 6.99% APR
const LOAN_YEARS = 25
const UTILITY_RATE = 0.25  // $/kWh CA avg
const UTILITY_INCREASE = 0.04 // 4% annual increase

function calcSolarSystem(bill: string) {
  const monthly = parseFloat(bill) || 150
  const monthlyKwh = monthly / UTILITY_RATE
  const systemKw = monthlyKwh / 30 / 5.5 / 0.8
  return Math.round(systemKw * 10) / 10
}

function calcMonthlyLoan(principal: number, rate: number, years: number) {
  const r = rate / 12
  const n = years * 12
  return principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
}

function calc25YearUtility(monthlyBill: number) {
  let total = 0
  let bill = monthlyBill
  for (let y = 0; y < 25; y++) {
    total += bill * 12
    bill *= (1 + UTILITY_INCREASE)
  }
  return Math.round(total)
}

export default function EstimatorSummary({ navSteps, activeStep, services, allData, onBack, onSubmit }: Props) {
  const hasSolar = services.includes('solar')
  const hasRoofing = services.includes('roofing')

  const { utilities, batteries, measurements } = allData
  const monthlyBill = parseFloat(utilities?.bill) || 150

  // ── SOLAR CALCS ──
  const systemKw = calcSolarSystem(utilities?.bill)
  const systemWatts = systemKw * 1000
  const solarPanelCost = Math.round(systemWatts * COST_PER_WATT)

  const batteryCost = (batteries?.powerwall || 0) * BATTERY_POWERWALL_COST +
                      (batteries?.enphase || 0) * BATTERY_ENPHASE_COST

  const solarSubtotal = solarPanelCost + batteryCost
  const taxCredit = Math.round(solarSubtotal * FEDERAL_TAX_CREDIT)
  const solarTotal = solarSubtotal - taxCredit

  // ── ROOF CALCS ──
  const sqft = measurements?.sqft || 1500
  const roofStyle = measurements?.roofStyle || 'shingles'
  const roofPitch = measurements?.roofPitch || 'conventional'
  const costPerSqft = ROOF_COST_PER_SQFT[roofStyle] || 4.5
  const pitchMultiplier = PITCH_MULTIPLIER[roofPitch] || 1.2
  const roofCost = Math.round(sqft * costPerSqft * pitchMultiplier)

  // ── COMBINED ──
  const grandTotal = (hasSolar ? solarSubtotal : 0) + (hasRoofing ? roofCost : 0)
  const totalAfterIncentives = grandTotal - (hasSolar ? taxCredit : 0)

  // ── PAYMENT OPTIONS ──
  const cashTotal = totalAfterIncentives
  const loanMonthly = Math.round(calcMonthlyLoan(totalAfterIncentives, LOAN_RATE, LOAN_YEARS))
  const utility25yr = calc25YearUtility(monthlyBill)
  const cashSaving25yr = utility25yr - cashTotal
  const loanSaving25yr = utility25yr - (loanMonthly * 12 * 25)

  const fmt = (n: number) => '$' + Math.abs(Math.round(n)).toLocaleString()

  return (
    <div className="calc-page">

      {/* Sub-nav */}
      <div className="calc-subnav">
        <div className="calc-subnav-tab active">Solar Estimate</div>
        {navSteps.map(step => (
          <div key={step} className={`calc-subnav-step${step === activeStep ? ' active' : ''}`}>
            {step}
          </div>
        ))}
      </div>

      {/* Body */}
      <div className="calc-summary-body">

        {/* ── LEFT: Cost breakdown ── */}
        <div className="calc-summary-left">
          <h2 className="calc-summary-title">Cost Summary</h2>

          {/* Solar section */}
          {hasSolar && (
            <div className="calc-summary-section">
              <div className="calc-summary-category">Solar</div>
              <div className="calc-summary-row">
                <span>{systemKw} kW Solar panels</span>
                <span>{fmt(solarPanelCost)}</span>
              </div>
              {batteryCost > 0 && (
                <div className="calc-summary-row">
                  <span>Battery Storage</span>
                  <span>{fmt(batteryCost)}</span>
                </div>
              )}
              <div className="calc-summary-row calc-summary-row--credit">
                <span>Federal Tax Credit</span>
                <span>({fmt(taxCredit)})</span>
              </div>
              <div className="calc-summary-row calc-summary-row--total">
                <span>Total Cost</span>
                <span>{fmt(solarSubtotal)}</span>
              </div>
              <div className="calc-summary-row calc-summary-row--bold">
                <span>Cost After Qualifying Rebates & Incentives</span>
                <span>{fmt(solarTotal)}</span>
              </div>
            </div>
          )}

          {/* Roof section */}
          {hasRoofing && (
            <div className="calc-summary-section">
              <div className="calc-summary-category">Roof</div>
              <div className="calc-summary-row">
                <span>Roof Install - {roofStyle.charAt(0).toUpperCase() + roofStyle.slice(1)}</span>
                <span>{fmt(roofCost)}</span>
              </div>
              <div className="calc-summary-row calc-summary-row--total">
                <span>Total Roof Cost</span>
                <span>{fmt(roofCost)}</span>
              </div>
            </div>
          )}
        </div>

        {/* ── RIGHT: Payment options ── */}
        <div className="calc-summary-right">
          <h2 className="calc-summary-title calc-summary-title--orange">
            Available Payment Options
          </h2>

          <div className="calc-payment-grid">

            {/* Cash */}
            <div className="calc-payment-card">
              <div className="calc-payment-header">
                <span className="calc-payment-type">Cash</span>
              </div>
              <div className="calc-payment-body">
                <div className="calc-payment-main">{fmt(cashTotal)}</div>
                <div className="calc-payment-label">Total Estimated Cost</div>
                <div className="calc-payment-divider"/>
                <div className="calc-payment-main">{fmt(utility25yr)}</div>
                <div className="calc-payment-label">
                  Est. 25 Year Utility Costs
                  <span className="calc-payment-note">Based on a 4% annual increase</span>
                </div>
                <div className="calc-payment-divider"/>
                <div className="calc-payment-main">{fmt(cashSaving25yr)}</div>
                <div className="calc-payment-label">Est. 25 Year Saving</div>
              </div>
            </div>

            {/* Loan */}
            <div className="calc-payment-card">
              <div className="calc-payment-header">
                <span className="calc-payment-type">Loan</span>
                <span className="calc-payment-badge">25 Years Loan<br/>$0 Down</span>
              </div>
              <div className="calc-payment-body">
                <div className="calc-payment-main">{fmt(loanMonthly)} / mo</div>
                <div className="calc-payment-label">
                  Monthly Payment
                  <span className="calc-payment-note">Based on approved credit</span>
                </div>
                <div className="calc-payment-divider"/>
                <div className="calc-payment-main">{fmt(monthlyBill)} / mo</div>
                <div className="calc-payment-label">Current Utility Bill</div>
                <div className="calc-payment-divider"/>
                <div className="calc-payment-main">{fmt(loanSaving25yr)}</div>
                <div className="calc-payment-label">Est. 25 Year Saving</div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Nav */}
      <div className="calc-footer-bar calc-footer-bar--split">
        <button className="calc-back-btn" onClick={onBack}>Back</button>
        <button className="calc-next-btn calc-next-btn--active" onClick={onSubmit}>
          Submit
        </button>
      </div>

    </div>
  )
}