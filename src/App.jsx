import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import KpiCards from './components/KpiCards'
import FinancialFlows from './components/FinancialFlows'
import RiskAnalytics from './components/RiskAnalytics'
import ContractExecution from './components/ContractExecution'
import ProcurementTable from './components/ProcurementTable'
import ComparisonView from './components/ComparisonView'
import { getRegion } from './data/regions'
import useScrollReveal from './hooks/useScrollReveal'
import './App.css'

function App() {
  const [activeRegion, setActiveRegion] = useState('zaporozhskaya')
  const [compareMode, setCompareMode] = useState(false)
  const [compareRegions, setCompareRegions] = useState([])

  useScrollReveal([compareMode, activeRegion])

  const region = getRegion(activeRegion)

  return (
    <div className="app">
      <Header
        activeRegion={activeRegion}
        setActiveRegion={setActiveRegion}
        compareMode={compareMode}
        setCompareMode={setCompareMode}
        compareRegions={compareRegions}
        setCompareRegions={setCompareRegions}
      />
      <main className="main">
        {compareMode && compareRegions.length >= 2 ? (
          <ComparisonView regionKeys={compareRegions} />
        ) : (
          <>
            <KpiCards data={region.kpi} />
            <div className="grid-two">
              <FinancialFlows data={region.financial} />
              <RiskAnalytics data={region.risks} />
            </div>
            <div className="grid-two grid-wide-right">
              <ContractExecution data={region.contracts} />
              <ProcurementTable data={region.procurements} />
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
