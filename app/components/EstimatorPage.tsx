'use client'
import { useState } from 'react'
import EstimateStep1 from './EstimateStep1'
import EstimateStep2 from './EstimateStep2'
import EstimateStep3 from './EstimateStep3'
import EstimateStep4 from './EstimateStep4'
import EstimateStep5 from './EstimateStep5'

function getStepList(services: string[]) {
  const hasSolar = services.includes('solar')
  const hasRoofing = services.includes('roofing')
  const steps: string[] = ['address', 'map']
  if (hasSolar) steps.push('utilities', 'solar-panels', 'battery')
  if (hasRoofing) steps.push('roof-type', 'roof-size', 'roof-age')
  steps.push('contact', 'summary')
  return steps
}

// Labels shown in the subnav bar
const STEP_LABELS: Record<string, string> = {
  address: 'Address',
  map: 'Address',
  utilities: 'Utilities',
  'solar-panels': 'Solar Panels',
  battery: 'Battery Storage',
  'roof-type': 'Roof Type',
  'roof-size': 'Roof Size',
  'roof-age': 'Roof Age',
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

  const steps = getStepList(services)
  const current = steps[stepIndex]

  const next = () => setStepIndex(i => i + 1)
  const back = () => setStepIndex(i => i - 1)

  // Subnav labels — deduplicated, skip 'map' since it shares 'Address'
  const navSteps = steps.filter(s => s !== 'map').map(s => STEP_LABELS[s])

  return (
    <>
      {current === 'address' && (
        <EstimateStep1
          navSteps={navSteps}
          activeStep="Address"
          address={address}
          setAddress={setAddress}
          services={services}
          setServices={setServices}
          onNext={next}
        />
      )}
      {current === 'map' && (
        <EstimateStep2
          navSteps={navSteps}
          activeStep="Address"
          address={address}
          onBack={back}
          onNext={next}
        />
      )}
      {current === 'utilities' && (
        <EstimateStep3
          navSteps={navSteps}
          activeStep="Utilities"
          onBack={back}
          onNext={(data) => { setUtilities(data); next() }}
        />
      )}
      {current === 'solar-panels' && (
        <EstimateStep4
          navSteps={navSteps}
          activeStep="Solar Panels"
          bill={utilities.bill}
          onBack={back}
          onNext={(p) => { setPanel(p); next() }}
        />
      )}
      {current === 'battery' && (
        <EstimateStep5
          navSteps={navSteps}
          activeStep="Battery Storage"
          onBack={back}
          onNext={(b) => { setBatteries(b); next() }}
        />
      )}
      {/* Roofing steps come next — to be built */}
    </>
  )
}