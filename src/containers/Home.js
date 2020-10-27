import React from 'react'
import { Grid } from '@material-ui/core'

export default function Home() {
    return (
        <>
        <Grid container justify="center" direction="row" alignItems="center">
            <div className="home-container">
                <Grid container item justify="center" direction="row" alignItems="center">
                <p class="home-text">
                    Hi, I'm Sean Thompson
                </p>
                </Grid>
                    <img className="profile-pic" src="/IMG-1778.jpg" />
                    <Grid container item justify="center" direction="row" alignItems="center">
                    <p class="home-text">
                        And I really like to create.
                    </p>
                </Grid>
            </div>
        </Grid>
        </>  
    )
}
