import React,{Component} from 'react';
import './App.css';

class App extends Component {
    render(){
        let page1='/temp/Tomo 20/200/002.jpg'
          , page2='/temp/Tomo 20/200/003.jpg';

        return (
            <div id="wrapper">
                <div class="toolbar">
                    <div class="ui menu floated left inverted">
                        <a class="item"><i aria-hidden="true" class="icon angle double left"></i></a>
                        <a class="item"><i aria-hidden="true" class="icon angle left"></i></a>
                        <a class="item"><i aria-hidden="true" class="icon angle right"></i></a>
                        <a class="item"><i aria-hidden="true" class="icon angle double right"></i></a>
                        <div class="divider"></div>
                        <a class="item"><i aria-hidden="true" class="icon expand arrows alternate"></i></a>
                        <a class="item"><i aria-hidden="true" class="icon redo"></i></a>
                        <a class="item"><i aria-hidden="true" class="icon undo"></i></a>
                    </div>
                    <div class="ui menu floated right inverted">
                        <a class="item"><i aria-hidden="true" class="icon arrows alternate"></i></a>
                        <a class="item"><i aria-hidden="true" class="icon arrows alternate horizontal"></i></a>
                        <a class="item"><i aria-hidden="true" class="icon arrows alternate vertical"></i></a>
                        <a class="item"><i aria-hidden="true" class="icon columns"></i></a>
                        <a class="item active"><i aria-hidden="true" class="icon exchange"></i></a>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="container">
                    <img alt="" src={process.env.PUBLIC_URL+page1} />
                    <img alt="" src={process.env.PUBLIC_URL+page2} />
                </div>
                <div class="footer">
                    <div class="column">2,3 / 175</div>
                    <div class="column">735x1100 (64.5%)  727x1100 (64.4%)</div>
                    <div class="column">Tomo 03.cbr</div>
                </div>
            </div>
        );
    }
}

export default App;

