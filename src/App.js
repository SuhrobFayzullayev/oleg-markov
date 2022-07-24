import logo from './images/wix.png';
import img1 from './images/1.webp';
import img2 from './images/2.webp';
import img3 from './images/3.webp';
import img4 from './images/4.webp';
import img5 from './images/5.webp';
import img6 from './images/6.webp';
import img7 from './images/7.webp';
import img8 from './images/8.webp';
import img9 from './images/9.webp';
import portret from './images/portret.webp';
import plane from './images/plane.webp';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="col-1">
          <a href="https://wix.com">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="col-2">
          <p>Click Edit to create your site!</p>
          <a href="#">More</a>
          <button>Edit</button>
        </div>
      </div>

      <div className="main">
        <div className="title">
          <div className="author">
            <p>Oleg Markov</p>
          </div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="home" id='home'>
          <div className="col-4 cl-1">
            <div className="box">
              <img src={img1} alt="" />
            </div>
            <div className="box">
              <img src={img4} alt="" />
            </div>
            <div className="box">
              <img src={img7} alt="" />
            </div>
          </div>
          <div className="col-4 cl-2">
            <div className="box">
              <img src={img2} alt="" />
            </div>
            <div className="box">
              <img src={img5} alt="" />
            </div>
            <div className="box">
              <img src={img8} alt="" />
            </div>
          </div>
          <div className="col-4 cl-3">
            <div className="box">
              <img src={img3} alt="" />
            </div>
            <div className="box">
              <img src={img6} alt="" />
            </div>
            <div className="box">
              <img src={img9} alt="" />
            </div>
          </div>
        </div>

        <div className="about" id='about'>
          <div className="portret-container">
            <hr className='hr-1' />
            <hr className='hr-2' />
            <hr className='hr-3' />
            <hr className='hr-4' />
            <div className="portret">
              <div className="portret-img">
                <img src={portret} alt="" />
              </div>
            </div>
          </div>
          <div className="text-block">
            <h1>About me</h1>
            <p>This is text. Click once and select "Edit Text" or just double click to add your text and customize the font. You can move it anywhere on the page. Tell site visitors about yourself. To delete this text, click once and select the Trash icon.</p>
          </div>
        </div>

        <div className="contact" id='contact'>
          <div className="contact-plane-img">
            <img src={plane} alt="" />
          </div>
          <div className="contact-text">
            <h2>Contact me</h2>
            <p>info@mysite.com | Phone: +7 (945) 000-00-00</p>
          </div>
          <div className="contact-form">
            <form action='#' method='GET'>
              <input type="text" placeholder='Name' />
              <input type="text" placeholder='Email address' />
              <input type="text" placeholder='Telephone' />
              <textarea placeholder='Add a message...'></textarea>
              <button type='submit'>Sent</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>© 2023 Oleg Markov. The site was created with <a href="https://wix.com">Wix.com</a></p>
        <ul>
          <li>
            <a href="http://www.facebook.com/wix">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="http://www.flickr.com/photos/wixcom/page1/">
              <i class="fa-brands fa-flickr"></i>
            </a>
          </li>
          <li>
            <a href="http://www.twitter.com/wix">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="http://www.pinterest.com/wixcom/">
              <i class="fa-brands fa-pinterest-p"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
