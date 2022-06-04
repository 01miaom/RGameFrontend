class BottonBarAssets extends React.Component {
    render() {
        return (
            <div id="assetsPage">
                <MaterialCards />
            </div>
        );
    }
}

class BottonBarAnimation extends React.Component {
    render() {
        return (
            <div id="animationPage">
            </div>
        );
    }
}

class BottonBarConsole extends React.Component {
    render() {
        return (
            <div id="consolePage">
            </div>
        );
    }
}

class MaterialCards extends React.Component {
    render() {
        return (
            <div id="materialcards">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16" style={{color:'#eee'}}>
                <circle cx="8" cy="8" r="8"/>
                </svg>
                </div>
            </div>
        );
    }
}
