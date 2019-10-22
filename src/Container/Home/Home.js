import React from 'react'
import { Navbar, Slider, SubBar, Footer, Section,Gallery,Map } from '../../Component/index'
import './Home.css'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { img1,img2,img3,img4} from '../../Images/index'



class Home extends React.Component {
    render() {
        return (
            <div>
                <SubBar />
                <Navbar  />
                <Slider />
                <div style={{ marginTop: '5%'}}>
                    <Grid justify='center' container >
                        <Grid item xs={12} sm={12} md={8} lg={10}>
                            <Paper style={{padding:20}}>
                                <div className="grid-flex">
                                    <div className="col col-image" style={{ backgroundImage: 'url(https://images.khaleejtimes.com/storyimage/KT/20191018/ARTICLE/191019203/AR/0/AR-191019203.jpg&MaxW=780&imageVersion=16by9&NCS_modified=20191018105245)' }}>
                                    </div>
                                    <div className="col col-text">
                                        <div >
                                            <h4 className='heading'>Prime Minister Vision</h4>
                                            <span style={{ textAlign: 'justify', display: 'block' }} id='span'>“Prime Minister Imran congratulated Dr Nishtar as well as the Saylani Trust for initiating the programme and said that none of the previous administrations had spent on welfare as much as his own government.
                                              He repeated his ambition to build a welfare state, based on the model of the state of Madina, where the poor section of the society will be uplifted. He said that the government was striving to create opportunities for the business community in order to generate wealth that can be spent on people. He emphasised, however, that change would take time.
                                              "People are impatient," the prime minister said. "It's only been 13 months and they ask 'where is the state of Madina'. The state of Madina was not created within a day."
              </span>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                            <Paper id='paper'  style={{padding:20}}>
                                <div id='grid' className="grid-flex">
                                    <div className="col col-image" style={{ backgroundImage: 'url(https://www.saylaniwelfare.com/public_html/images/saylani/gallery/hazrat.jpg)' }}>
                                        &nbsp;
          </div>
                                    <div id='col' className="col col-text col-left">
                                        <div>
                                            <h4 className='heading'>Saylani Chairman Message</h4>
                                            <span style={{ textAlign: 'justify', display: 'block' }}>
                                                Who is it that would loan Allah a goodly loan so He may multiply it for him many times over? ( Surat Baqara, Verse 245)
                                                It should be noted that Allah, who is in need of no one and nothing, instills upon his men to give Qarz-e-Hasana because it is in man’s nature to be frugal whilst spending his wealth. Allah speaks about qarz because it is returned and Allah promises that He will return the goodly loan by 70 folds. Allah conveys his message to the Muslim ummah through the Holy Prophet Muhammad prompting Muslims to spend their wealth in a certain way. He says,Oh children of Adam! Trust me with your wealth. If you do so, no fire, flood or thieves will be able to rob you off your money. Instead, you will be endowed with your wealth when you most need it. He further says that the poor and weak will not remain hungry and naked except due to the negligence of the rich, who should not be stingy in spending their money on those worse off than themselves. Allah will not only take strict accountability from those people but He will also punish them accordingly. On the Day Of Judgement, the rich will be humiliated because they did not help the needy. The needy will complain to Allah and say that all those men on whom you graciously bestowed the rights of wealth showed negligence in its proper use; they were busy spending on themselves and forgot about us, the ones who needed it. Allah will reply to this and say: “I swear on my respect and glory! I will bring you closer to me and push them further away.”
                                                Alhamdollilah, Allah has accorded Saylani Welfare with the highest favor by sending those people our way who follow the teachings of the Holy Quran and Hadith, give zakat, fidyah, fitrah, khairat and other donations to help us help those in need. The purpose of sending this message to you is so that you not only spread this message to others but also play your part in helping us to continue serving and helping the needy till the Day of Judgment.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
                <div style={{marginTop:'5%',}}>
                    <h1 className='heading' style={{color:'#316dc3'}}>Image Gallery</h1>
                <div class="scrollmenu">
                    <Gallery img={[{name:'https://www.saylaniwelfare.com/public_html/images/saylani/gallery/food.jpg'},{name:img1},{name:img2},{name:img3},{name:img4},]} />
                </div>
                </div>
                <div style={{marginTop:'5%',}} id='loc'>
                    <h1 className='heading' style={{color:'#316dc3'}}>Location</h1>
                    <Map />
                </div>
                    <Footer />
                </div>

                )
            }
        }
        
export default Home