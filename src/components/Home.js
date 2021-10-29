import React from 'react'
import Section from './Section'
import styled from 'styled-components'

function Home() {
    return (
        <HomeContainer>
            <Section banner lightButton bgImage="model-s.jpg" title="Model S" description="Order Online for Touchless Delivery" darkBtnText="Custom Order" lightBtnText="Existing Inventory" />
            <Section lightButton bgImage="model-y.jpg" title="Model Y" description="Order Online for Touchless Delivery" darkBtnText="Custom Order" lightBtnText="Existing Inventory" />
            <Section lightButton bgImage="model-3.jpg" title="Model 3" description="Order Online for Touchless Delivery" darkBtnText="Custom Order" lightBtnText="Existing Inventory" />
            <Section lightButton bgImage="model-x.jpg" title="Model X" description="Order Online for Touchless Delivery" darkBtnText="Custom Order" lightBtnText="Existing Inventory" />
            <Section lightButton bgImage="solar-panel.jpg" title="Solar Panels" description="Lowest Cost Solar Panels in Americ" darkBtnText="Order Now" lightBtnText="Learn More" />
            <Section lightButton bgImage="solar-roof.jpg" title="Solar Roof" description="Produce Clean Energy From Your Roof" darkBtnText="Order Now" lightBtnText="Learn More" />
            <Section bgImage="accessories.jpg" title="Accessories" description="" darkBtnText="Shop Now" lightBtnText="Existing Inventory" />
        </HomeContainer>
    )
}

export default Home

const HomeContainer = styled.div`
    width:100%;
    height:100%;
`
