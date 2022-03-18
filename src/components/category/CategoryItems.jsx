import { Link } from "react-router-dom"
import "./category.scss"

const CategoryItems = () => {
  return (
    <div className='categoryItems_container' >
        <div className="category__title">
            <h1>KATEGORİLER</h1>
        {/* <img src="https://www.pngfind.com/pngs/m/164-1644344_transparent-gold-floral-pattern-png-download-png-download.png" alt="" /> */}
        </div>
        <div className="category__items_container" >

        <div className="categoryItems__wrapper">
        <div className="flip-box">
      <div className="front" style={{backgroundImage: `url(/images/categoryImage/foncategory.jpg)`}}>
        <div className="content">
          <div className="category__title_container">
          <h4>
          Fonlar
          </h4>
          </div>
        </div>
      </div>
      <div className="back">
        <div className="content">
          
          <Link>
          <button>
            Fonlara Gözat
          </button>
          </Link>
        </div>
      </div>
    </div>
           
        </div>
        <br />
        <div className="categoryItems__wrapper">
        <div className="flip-box">
      <div className="front" style={{backgroundImage: `url(/images/categoryImage/tülcategory.jpg)`}}>
        <div className="content">
          <h1>
          Tüller
          </h1>
        </div>
      </div>
      <div className="back">
        <div className="content">
          
          <Link>
          <button>
            Tüllere Gözat
          </button>
          </Link>
        </div>
      </div>
    </div>
           
        </div>
        <br />
        <div className="categoryItems__wrapper">
        <div className="flip-box">
      <div className="front" style={{backgroundImage: `url(/images/categoryImage/tülcategory.jpg)`}}>
        <div className="content">
          <h1>
          Extralar
          </h1>
        </div>
      </div>
      <div className="back">
        <div className="content">
          
          <Link>
          <button>
            extralara Gözat
          </button>
          </Link>
        </div>
      </div>
    </div>
           
        </div>
        <br />
        <div className="categoryItems__wrapper">
        <div className="flip-box">
      <div className="front" style={{backgroundImage: `url(/images/categoryImage/tülcategory.jpg)`}}>
        <div className="content">
          <h1>
          Yatag ortuleri
          </h1>
        </div>
      </div>
      <div className="back">
        <div className="content">
          
          <Link>
          <button>
            Yataglara Gözat
          </button>
          </Link>
        </div>
      </div>
    </div>
           
        </div>
        <br />
        <div className="categoryItems__wrapper">
        <div className="flip-box">
      <div className="front" style={{backgroundImage: `url(/images/categoryImage/tülcategory.jpg)`}}>
        <div className="content">
          <h1>
          Aksesuarlar
          </h1>
        </div>
      </div>
      <div className="back">
        <div className="content">
          
          <Link>
          <button>
            Aksesuarlara Gözat
          </button>
          </Link>
        </div>
      </div>
    </div>
        </div>
        <br />
        <div className="categoryItems__wrapper">
        <div className="flip-box">
      <div className="front" style={{backgroundImage: `url(/images/categoryImage/tülcategory.jpg)`}}>
        <div className="content">
          <h1>
          Jaluzler
          </h1>
        </div>
      </div>
      <div className="back">
        <div className="content">
          
          <Link>
          <button>
            Jaluzlere Gözat
          </button>
          </Link>
        </div>
      </div>
    </div>
        </div>
           <br />
        </div>
           

           
    </div>
  )
}

export default CategoryItems