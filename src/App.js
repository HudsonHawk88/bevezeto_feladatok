import React from 'react';
import { Button } from 'reactstrap'
import './App.css';

class App extends React.Component {

  renderFeladat1 = () => {
    let szam1 = null;
    let szam2 = null;
    szam1 = window.prompt('Kérlek add be az első számot!');
    szam2 = window.prompt('Kérlek add be az második számot!');
    let element_feladat1 = document.getElementById('1.feladat');
    let nagyobb = szam1 < szam2 ? szam2 : szam1;
    if((szam1 !== null || szam1 !== undefined) && (szam2 != null || szam2 != undefined)){
      element_feladat1.append('A 2 szám közül a nem kisebb, vagyis nagyobb szám a: ' + nagyobb);
    }
    else if (szam1 === 0) {
      alert('Az első számot nem adatad meg!');
    }
    else if (szam2 === 0) {
      alert('Az második számot nem adatad meg!');
    }
  }

  renderFeladat2 = () => {
    let szam1 = window.prompt('Kérlek add be az első számot!');
    let szam2 = window.prompt('Kérlek add be az első számot!');
    let element_feladat2 = document.getElementById('feladat2');
  }

  renderFeladat3 = () => {
    let szam1 = window.prompt('Kérlek add be az első számot!');
    let szam2 = window.prompt('Kérlek add be az első számot!');
    let element_feladat3 = document.getElementById('feladat3');
  }

  renderFeladat4 = () => {
    let szam1 = window.prompt('Kérlek add be az első számot!');
    let szam2 = window.prompt('Kérlek add be az első számot!');
    let element_feladat4 = document.getElementById('feladat4');
  }

  renderFeladat5 = () => {
    let szam1 = window.prompt('Kérlek add be az első számot!');
    let szam2 = window.prompt('Kérlek add be az első számot!');
    let element_feladat5 = document.getElementById('feladat5');
  }

  renderFeladat6 = () => {
    let szam1 = window.prompt('Kérlek add be az első számot!');
    let szam2 = window.prompt('Kérlek add be az első számot!');
    let element_feladat6 = document.getElementById('feladat6');
  }

  renderFeladat7 = () => {
    let szam1 = window.prompt('Kérlek add be az első számot!');
    let szam2 = window.prompt('Kérlek add be az első számot!');
    let element_feladat7 = document.getElementById('feladat7');
    document.getElementById('9.feladat');
  }

  renderFeladat8 = () => {
    let szam1 = window.prompt('Kérlek add be az első számot!');
    let szam2 = window.prompt('Kérlek add be az első számot!');
    let element_feladat8 = document.getElementById('feladat8');
  }

  renderFeladat9 = () => {
    let szam1 = window.prompt('Kérlek add be az első számot!');
    let szam2 = window.prompt('Kérlek add be az első számot!');
    let element_feladat9 = document.getElementById('feladat9');
  }

  render() {
    return (
      <div className="App">
        <div className='1.feladat' id='1.feladat'><Button onClick={this.renderFeladat1}>1.Feladat</Button></div>
        <div className='2.feladat' id='2.feladat'><Button onClick={this.renderFeladat2}>2.Feladat</Button></div>
        <div className='3.feladat' id='3.feladat'><Button onClick={this.renderFeladat3}>3.Feladat</Button></div>
        <div className='4.feladat' id='4.feladat'><Button onClick={this.renderFeladat4}>4.Feladat</Button></div>
        <div className='5.feladat' id='5.feladat'><Button onClick={this.renderFeladat5}>5.Feladat</Button></div>
        <div className='6.feladat' id='6.feladat'><Button onClick={this.renderFeladat6}>6.Feladat</Button></div>
        <div className='7.feladat' id='7.feladat'><Button onClick={this.renderFeladat7}>7.Feladat</Button></div>
        <div className='8.feladat' id='8.feladat'><Button onClick={this.renderFeladat8}>8.Feladat</Button></div>
        <div className='9.feladat' id='9.feladat'><Button onClick={this.renderFeladat9}>9.Feladat</Button></div>
      </div>
    );
  }
}

export default App;
