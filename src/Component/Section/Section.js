import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

export default class Section extends React.Component{
    render(){
        return(
            <div>
                <Grid justify='center' container >
                        <Grid  item xs={10} sm={12} md={10} lg={10}>
                            <Paper>
                                <div style={{padding:5}} class="bg-white pinside40 number-block outline mb60 bg-boxshadow">
                                    <div style={{marginTop:-30}} class="circle"><span class="number">{this.props.number}</span></div>      
                                    <h3 class="number-title">{this.props.title}</h3>      
                                    <p>{this.props.desc}</p>  
                                    <p>{this.props.desc}</p>  
                                    </div>
                            </Paper>
                        </Grid>
                    </Grid>
            </div>
        )
    }
}