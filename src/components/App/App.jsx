import React, { useState } from 'react'
// import './App.css'
import {Wrapper, Container} from './App.styles'
import AppHeader from '../AppHeader'
import AppContainer from '../AppContainer'
import Checkbox from '../../shared/Checkbox'

function App () {
    const [lettuce, setLettuce] = useState(true)
    const [rice, setRice] = useState(true)

    return <Wrapper>
        <Container>
            <AppHeader />
            {/* funciona tipo: <AppHeader></AppHeader> */}                   
            <AppContainer 
                left={<div>
                    produtos disponíveis
                    <Checkbox
                        value = {lettuce} 
                        title="Alface"
                        onClick = {() => setLettuce(!lettuce)}
                    />
                    <Checkbox
                        value = {rice} 
                        title="Arroz"
                        onClick = {() => setRice(!rice)}
                    />
                </div>}
                middle={<div>
                    sua lista de compras
                </div>}    
                right={<div>
                    estatísticas
                </div>}        
            />
        </Container>
    </Wrapper>
}

export default App