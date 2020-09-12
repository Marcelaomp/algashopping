import React from 'react'
// import './App.css'
import {Wrapper, Container} from './App.styles'
import AppHeader from '../AppHeader'
import AppContainer from '../AppContainer'

function App () {
    return <Wrapper>
        <Container>
            <AppHeader />
            {/* funciona tipo: <AppHeader></AppHeader> */}                   
            <AppContainer 
                left={<div style={{backgroundColor: 'red'}}>
                    produtos disponíveis
                </div>}
                middle={<div style={{backgroundColor: 'blue'}}>
                    sua lista de compras
                </div>}    
                right={<div style={{backgroundColor: 'green'}}>
                    estatísticas
                </div>}        
            />
        </Container>
    </Wrapper>
}

export default App