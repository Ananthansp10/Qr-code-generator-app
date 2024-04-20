import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react'

function App() {

  const [qrcode, setqrcode] = useState("")

  function generateqrcode() {
    if (qrcode.length > 0) {
      document.getElementById('img').src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrcode
      setTimeout(() => {
        window.location.reload()
      }, 20000);
    }
    else {
      document.getElementById('field').classList.add("error")
      setTimeout(() => {
        document.getElementById('field').classList.remove("error")
      }, 1000);
    }
  }

  return (
    <div>
      <h1 className="mt-4 text-center">Qr Code <span className="bg-red">Generator</span></h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <div className="main-body mt-3">
              <h6 className="ps-4 pt-5">Enter url or text</h6>
              <input type="text" placeholder="Enter url or text" id='field' onChange={(e) => setqrcode(e.target.value)} className="inp ms-3 mt-3" />
              <div className="qrimg mt-5">
                <img src="" id="img" alt="" />
              </div>
              <button className="btn text-center" onClick={generateqrcode}>Generate Qr Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
