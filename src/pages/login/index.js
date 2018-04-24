import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.scss";
import { login } from "../../api/user";

class myLogin extends Component {
    login = async () => {
        let res = await login(this.username.value, this.password.value);
        console.log(res);
    };

    render() {
        let inpStyle = {
            outline: "none",
            display: "inline-block",
            borderRadius: "7px",
            marginBottom: "7px",
            height: "30px",
            width: "60%",
            background: "#fff",
            textIndent: "15px"
        };
        return (
            <div className="login-container">
                <div className="login-content">
                    <h2 className="login-title">Fantastic APP</h2>
                    <div className="login-input">
                        <input
                            ref={a => (this.username = a)}
                            style={inpStyle}
                            type="text"
                            placeholder="username"
                        />
                        <br />
                        <input
                            ref={a => (this.password = a)}
                            style={inpStyle}
                            type="password"
                            placeholder="password"
                            onKeyUp={e => {
                                if (e.keyCode === 13) {
                                    this.login();
                                }
                            }}
                        />
                        <br />
                        <br />
                        <button>注册</button>
                        <button onClick={this.login}>登录</button>
                        <br />
                        <br />
                        <a
                            href="javascript:;"
                            style={{
                                color: "#333",
                                fontSize: "12px"
                            }}
                        >
                            忘记密码?
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

myLogin.propTypes = {};

export default myLogin;
