import { useEffect, useState } from 'react'
import './App.css'
import { getMinimumSpeedFromRunes } from './scripts/main.js'
import monsters from './data/monsters.json'

function App() {
  const options = Object.entries(monsters).map(([key, value]) => ({
    name: key,
    runes: 0
  }))

  const [firstMonster, setFirstMonster] = useState(options[0])
  const [secondMonster, setSecondMonster] = useState(options[0])
  const [thirdMonster, setThirdMonster] = useState(options[0])
  const [skyTotem, setSkyTotem] = useState(15)
  const [speedLeader, setSpeedLeader] = useState(0)

  const handleChange = (e, monsterOrder) => {
    if (monsterOrder === 'first') {
      setFirstMonster((prev) => ({
        ...prev,
        name: e.target.value
      }))
    } else if (monsterOrder === 'second') {
      setSecondMonster((prev) => ({
        ...prev,
        name: e.target.value
      }))
    } else {
      setThirdMonster((prev) => ({
        ...prev,
        name: e.target.value
      }))
    }
  }

  useEffect(() => {
    const minimumSpeeds = getMinimumSpeedFromRunes(skyTotem, speedLeader, firstMonster, secondMonster, thirdMonster)
    setSecondMonster((prev) => ({ ...prev, runes: minimumSpeeds[0] }))
    setThirdMonster((prev) => ({ ...prev, runes: minimumSpeeds[1] }))
  }, [firstMonster, secondMonster.name, thirdMonster.name, skyTotem, speedLeader])

  return (
    <>
      <div role='group'>
        <button className='lblButton'>Sky Totem </button>
        <select value={skyTotem} onChange={(e) => setSkyTotem(Number(e.target.value))} name='skyTotem' id='skyTotem'>
          <option value={0}>0 %</option>
          <option value={1}>1 %</option>
          <option value={2}>2 %</option>
          <option value={2.5}>2.5 %</option>
          <option value={3}>3 %</option>
          <option value={4}>4 %</option>
          <option value={5}>5 %</option>
          <option value={5.5}>5.5 %</option>
          <option value={6}>6 %</option>
          <option value={7}>7 %</option>
          <option value={8}>8 %</option>
          <option value={8.5}>8.5 %</option>
          <option value={9}>9 %</option>
          <option value={10}>10 %</option>
          <option value={11}>11 %</option>
          <option value={11.5}>11.5 %</option>
          <option value={12}>12 %</option>
          <option value={13}>13 %</option>
          <option value={14}>14 %</option>
          <option value={14.5}>14.5 %</option>
          <option value={15}>15 %</option>
        </select>
      </div>
      <div role='group'>
        <button className='lblButton' >Speed Leader</button>
        <select value={speedLeader} onChange={(e) => setSpeedLeader(Number(e.target.value))} name='speedLeader' id='speedLeader'>
          <option value={0}>0 %</option>
          <option value={10}>10 %</option>
          <option value={19}>19 %</option>
          <option value={21}>21 %</option>
          <option value={24}>24 %</option>
          <option value={28}>28 %</option>
          <option value={30}>30 %</option>
          <option value={33}>33 %</option>
        </select>
      </div>
      <div className='cards'>
        <div className="card">
              <select value={firstMonster?.name} onChange={(e) => handleChange(e, 'first')}>
                  {options.map(option => (
                      <option key={option.name} value={option.name}>
                          {option.name}
                      </option>
                  ))
                  }
              </select>
                  <label>Speed from runes</label>
                  <input type='number' value={firstMonster?.runes} onChange={(e) => setFirstMonster({...firstMonster, runes: Number(e.target.value)})}></input>
          </div>
          <div className="card">
              <select value={secondMonster?.name} onChange={(e) => handleChange(e, 'second')}>
                  {options.map(option => (
                      <option key={option.name} value={option.name}>
                          {option.name}
                      </option>
                  ))
                  }
              </select>
                  <label>Minimum speed</label>
                  <input disabled type='number' value={secondMonster?.runes}></input>
          </div>
          <div className="card">
              <select value={thirdMonster?.name} onChange={(e) => handleChange(e, 'third')}>
                  {options.map(option => (
                      <option key={option.name} value={option.name}>
                          {option.name}
                      </option>
                  ))
                  }
              </select>
                  <label>Minimum speed</label>
                  <input disabled type='number' value={thirdMonster?.runes}></input>
          </div>
      </div>
    </>
  )
}

export default App
