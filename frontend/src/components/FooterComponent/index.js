import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <div className="footer">
            <a className="link" target="_blank" href="https://www.linkedin.com/in/ali-naqvi-251910226/">Ali Naqvi</a>
            <a className="link" target="_blank" href="https://nodejs.org/en/">NodeJS</a>
            <a className="link" target="_blank" href="https://reactjs.org/">React</a>
            <a className="link" target="_blank" href="https://www.postgresql.org/docs/13/app-psql.html">PSQL</a>
            <a className="link" target="_blank" href="https://sequelize.org/">Sequelize</a>
            <a className="link" target="_blank" href="https://github.com/arn1215"><img className="ghImg" src={require("./github.png")} /></a>
            <a className="link" target="_blank" href="https://www.javascript.com/">JavaScript</a>
            <a className="link" target="_blank" href="https://expressjs.com/">Express</a>
            <a className="link" target="_blank" href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5">HTML5</a>
            <a className="link" target="_blank" href="https://www.heroku.com/">Heroku</a>
            <a className="link" target="_blank" href="https://redux.js.org/">Redux</a>
            
            
            
            
        </div>
    )
}

export default Footer