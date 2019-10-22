import React from 'react'

class Footer extends React.Component{
    render() {
      return (
          <div style={{background:'#25272e',marginTop:'5%'}}>
        <footer  className="page-footer font-small">
          {/* Footer Elements */}
          <div style={{background:'#25272e'}} className="container">
            {/* Grid row*/}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-12 py-5">
                <div className="mb-5 flex-center">
                  {/* Facebook */}
                  <a  className="fb-ic">
                    <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  {/* Twitter */}
                  <a  className="tw-ic">
                    <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  {/* Google +*/}
                  <a className="gplus-ic">
                    <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  {/*Instagram*/}
                  <a  className="ins-ic">
                    <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                </div>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row*/}
          </div>
          <hr />
          {/* Footer Elements */}
          {/* Copyright */}
          <div style={{background:'#316dc3'}} className="footer-copyright text-center py-3">© 2019 Copyright:
            <a href='#'>Thari 💖 Tigers</a>
          </div>
          {/* Copyright */}
        </footer>
        </div>
      );
    }
  }

export default Footer