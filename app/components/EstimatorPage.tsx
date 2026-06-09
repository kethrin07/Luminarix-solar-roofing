'use client'
import { useState } from 'react'
import EstimatorAddress from './EstimatorAddress'
import EstimatorMap from './EstimatorMap'
import EstimatorUtilities from './EstimatorUtilities'
import EstimatorSolarPanels from './EstimatorSolarPanels'
import EstimatorBattery from './EstimatorBattery'
import EstimatorRoofStyle from './EstimatorRoofStyle'
import EstimatorRoofMeasurements from './EstimatorRoofMeasurements'
import EstimatorContactInfo from './EstimatorContactInfo'
import EstimatorSummary from './EstimatorSummary'
import EstimatorSuccess from './EstimatorSuccess'

function getStepList(services: string[]) {
  const hasSolar = services.includes('solar')
  const hasRoofing = services.includes('roofing')
  const steps: string[] = ['address', 'map']
  if (hasSolar) steps.push('utilities', 'solar-panels', 'battery')
  if (hasRoofing) steps.push('roof-style', 'roof-measurements')
  steps.push('contact', 'summary')
  return steps
}

const STEP_LABELS: Record<string, string> = {
  address: 'Address',
  map: 'Address',
  utilities: 'Utilities',
  'solar-panels': 'Solar Panels',
  battery: 'Battery Storage',
  'roof-style': 'Measurements',
  'roof-measurements': 'Measurements',
  contact: 'Contact Info',
  summary: 'Cost Summary',
}

export default function EstimatorPage() {
  const [stepIndex, setStepIndex] = useState(0)
  const [address, setAddress] = useState('')
  const [services, setServices] = useState<string[]>([])
  const [utilities, setUtilities] = useState({ bill: '', provider: '' })
  const [panel, setPanel] = useState('')
  const [batteries, setBatteries] = useState<Record<string, number>>({})
  const [measurements, setMeasurements] = useState<any>({})
  const [contact, setContact] = useState<any>({})
  const [submitted, setSubmitted] = useState(false)

  const steps = getStepList(services)
  const current = steps[stepIndex]
  const next = () => setStepIndex(i => i + 1)
  const back = () => setStepIndex(i => i - 1)
  const navSteps = steps
  .filter(s => s !== 'map' && s !== 'roof-measurements')
  .map(s => STEP_LABELS[s])
  .filter((label, index, arr) => arr.indexOf(label) === index) // remove duplicates

  const allData = { address, services, utilities, panel, batteries, measurements, contact }

  if (submitted) return <EstimatorSuccess services={services} />

  return (
    <>
      {current === 'address' && (
        <EstimatorAddress navSteps={navSteps} activeStep="Address"
          address={address} setAddress={setAddress}
          services={services} setServices={setServices}
          onNext={next} />
      )}
      {current === 'map' && (
        <EstimatorMap navSteps={navSteps} activeStep="Address"
          address={address} onBack={back} onNext={next} />
      )}
      {current === 'utilities' && (
        <EstimatorUtilities navSteps={navSteps} activeStep="Utilities"
          onBack={back} onNext={(d) => { setUtilities(d); next() }} />
      )}
      {current === 'solar-panels' && (
        <EstimatorSolarPanels navSteps={navSteps} activeStep="Solar Panels"
          bill={utilities.bill} onBack={back}
          onNext={(p) => { setPanel(p); next() }} />
      )}
      {current === 'battery' && (
        <EstimatorBattery navSteps={navSteps} activeStep="Battery Storage"
          onBack={back} onNext={(b) => { setBatteries(b); next() }} />
      )}
      {current === 'roof-style' && (
          <EstimatorRoofStyle navSteps={navSteps} activeStep="Measurements"
            onBack={back} onNext={(d) => { setMeasurements({...measurements, ...d}); next() }} />
        )}
        {current === 'roof-measurements' && (
          <EstimatorRoofMeasurements navSteps={navSteps} activeStep="Measurements"
            onBack={back} onNext={(d) => { setMeasurements({...measurements, ...d}); next() }} />
        )}
      {current === 'contact' && (
        <EstimatorContactInfo navSteps={navSteps} activeStep="Contact Info"
          onBack={back} onNext={(d) => { setContact(d); next() }} />
      )}
      {current === 'summary' && (
        <EstimatorSummary
          navSteps={navSteps}
          activeStep="Cost Summary"
          services={services}
          allData={allData}
          onBack={back}
          onSubmit={() => setSubmitted(true)}
        />
      )}
    </>
  )
}