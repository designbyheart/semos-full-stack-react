'use client'

import { useEffect, useState } from 'react'

const Characters = () => {
    const [heroes, setHeroes] = useState([])

    useEffect(() => {
        loadData()

        return () => {
            console.log('login page unmounted')
        }
    }, [])

    const loadData = async () => {
        console.log('login page mounted')
        fetch('https://api.opendota.com/api/heroes')
            .then(async (response) => {
                const data = await response.json()
                // console.log('Here is your data', data)
                setHeroes(data)
                // // check for error response
                // if (!response.ok) {
                //     // get error message from body or default to response statusText
                //     const error = (data && data.message) || response.statusText
                //     return Promise.reject(error)
                // }

                // this.setState({ totalReactPackages: data.total })
            })
            .catch((error) => {
                // this.setState({ errorMessage: error.toString() })
                console.error('There was an error!', error)
            })
    }

    const renderHeroRows = () => {
        return heroes.map(({ id, localized_name, primary_attr, ...props }, index) => (
            <div style={styles.heroItem} key={id}>
                <input type="checkbox" />
                <img
                    src={
                        'https://lh5.googleusercontent.com/ZMhm66eYUAVnXp7-B0pkg0MakeROy-FX68XzLC7kcWhNC8YZGhzy0wRQZZB8eKOn_5Q4CLbu34tAaqy9vmGj6qrjIiYQ3zmAV8dLiXSAPqxZs-xAyZ4BFgYMvnfbtsTaROeYEfdF'
                    }
                />
                <span style={styles.span}>{localized_name}</span>
                <span style={styles.span}>{primary_attr}</span>
            </div>
        ))
    }

    console.log('list of heroes', heroes)

    return (
        <div style={styles.container}>
            <h1>Characters</h1>
            <div style={styles.table}>
                {/* <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th></th>
                    </tr>
                </thead> */}
                <div>{renderHeroRows()}</div>
            </div>
        </div>
    )
}

export default Characters

const styles = {
    container: {
        background: 'white',
        padding: '2rem',
        // textAlign: 'center',
        height: '100vh',
        width: '100vw'
    },
    table: {
        border: '1px solid black',
        width: '50%',
        maxHeight: '20rem',
        overflow: 'scroll'
    },
    heroItem: {
        background: 'pink',
        padding: '1rem',
        borderRadius: '0.5rem',
        marginBottom: '1rem'
    },
    span: {
        display: 'inline-block',
        padding: '0 1rem'
    }
}
