class DetailBar extends React.Component {
    render() {
        return (
            <div id="detailBar">
                <div id="detailpart">
                    <p id="detailp">Name </p>
                    <input value="cube" id="detaili" style={{width: 80}}></input>
                </div>
                <div id="detailpart">
                    <p id="detailp">UUID </p>
                    cube1
                </div>
                <div id="detailpart">
                    <p id="detailp">Visible </p>
                    <input type="checkbox" value="cube"  id="details"></input>
                </div>
                <div id="detailpart">
                    <p id="detailp">Position </p>
                    <p id="detailxyz">X</p>
                    <input value="0" id="detaili" style={{width: 24}}></input>
                    <p id="detailxyz">Y</p>
                    <input value="0" id="detaili" style={{width: 24}}></input>
                    <p id="detailxyz">Z</p>
                    <input value="0" id="detaili" style={{width: 24}}></input>
                </div>
                <div id="detailpart">
                    <p id="detailp">Scale </p>
                    <p id="detailxyz">X</p>
                    <input value="0" id="detaili" style={{width: 24}}></input>
                    <p id="detailxyz">Y</p>
                    <input value="0" id="detaili" style={{width: 24}}></input>
                    <p id="detailxyz">Z</p>
                    <input value="0" id="detaili" style={{width: 24}}></input>
                </div>
                <div id="detailpart">
                    <p id="detailp">Rotation </p>
                    <p id="detailxyz">X</p>
                    <input value="0" id="detaili" style={{width: 24}}></input>
                    <p id="detailxyz">Y</p>
                    <input value="0" id="detaili" style={{width: 24}}></input>
                    <p id="detailxyz">Z</p>
                    <input value="0" id="detaili" style={{width: 24}}></input>
                </div>
                <div id="detailpart">
                    <p id="detailp">Size </p>
                    <p id="detailxyz">X</p>
                    <input value="0" id="detaili" style={{width: 24}}></input>
                    <p id="detailxyz">Y</p>
                    <input value="0" id="detaili" style={{width: 24}}></input>
                    <p id="detailxyz">Z</p>
                    <input value="0" id="detaili" style={{width: 24}}></input>
                </div>
            </div>
        );
    }
}
