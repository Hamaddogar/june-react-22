import React from 'react'
 import Header from './Header/Header'
 import Body from '../Home/body/body'
  import Footer from '../Home/Footer/footer'



class Home extends React.Component {



    render() {
        return (

            <div>

         
             <Header/>
             <Body/>
             <Footer/> 

            </div>
        )

    }


}

export default Home