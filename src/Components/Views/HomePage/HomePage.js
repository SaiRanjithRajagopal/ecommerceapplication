import React from 'react'
import KidsPage from '../Kids/KidsPage'

const HomePage = () => {

    var increaseHeight = {
        marginTop: '10px'
    };

    return (
        <div>
            <div style={increaseHeight}>
                <KidsPage />
                <KidsPage />
                <KidsPage />
            </div>
        </div>
    )
}

export default HomePage
