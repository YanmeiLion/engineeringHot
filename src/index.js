
// import '@babel/polyfill'
// import React from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';

class Module extends React.Component {
    constructor(props) {
        super();
        this.state = {
            list: [],
            isShow: 'All',
            titles: [
                { name: 'All', path: 'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories' },
                { name: 'JavaScript', path: 'https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories' },
                { name: 'Ruby', path: 'https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories' },
                { name: 'Java', path: 'https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories' },
                { name: 'CSS', path: 'https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories' }
            ]
        }
    }
    // 切换 title 选项
    changeAcive = (e) => {
        const { isShow } = this.state
        this.setState({
            isShow: e.target.innerText
        }, () => {
            // 重新发送api
            this.getListData();
        })
    }

    componentDidMount() {
        this.getListData()
    }

    getListData = async () => {
        const { isShow, titles } = this.state
        titles.map(item => {
            if (item.name == isShow) {
                document.getElementById('loadingDiv').style.display = "";
                // 发送请求
                axios.get(`${item.path}`)
                    .then(res => {
                        if (res.status == 200) {
                            document.getElementById('loadingDiv').style.display = "none";
                            this.setState({
                                list: res.data.items
                            })
                        }
                    })
                    .catch(err => {
                        console.log('err', err)
                        // 捕获异常
                        alert('请求已经达到上限')
                    })
            }
        })
    }

    render() {
        const { list, titles, isShow } = this.state
        const newDiv = list.map((item, index) => {
            return (
                <div className='productOne' key={item.id}>
                    <span> #{index + 1} </span>
                    <div className='titleImg'>
                        <img src={item.owner.avatar_url} alt="" />
                    </div>
                    <p > {item.name} </p>
                    <div className='titleInfo'>
                        <div>
                            <i className="fa fa-user icon1" aria-hidden="true" ></i>
                            <b>{item.name}</b>
                        </div>
                        <div>
                            <i className="fa fa-star icon2" aria-hidden="true" ></i>
                            {item.stargazers_count} starts
                        </div>
                        <div>
                            <i className="fa fa-share-alt icon3" aria-hidden="true" ></i>
                            {item.forks_count} forks
                        </div>
                        <div>
                            <i className="fa fa-exclamation-triangle icon4" aria-hidden="true" ></i>
                            {item.open_issues_count} open issues
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div className="title">
                    <ul>
                        {titles.map(item => <li key={item.name} className={item.name == isShow ? 'active' : ''} onClick={this.changeAcive}>
                            {item.name}
                        </li>)}
                    </ul>
                </div>
                
                <div className='mian'>
                    {newDiv}
                </div>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Module />

            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('container')
)
