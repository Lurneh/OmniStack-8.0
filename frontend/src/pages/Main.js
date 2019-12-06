import React from 'react';
import './Main.css';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main() {
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                <li>
                    <img src="https://i.pinimg.com/originals/6b/0a/ae/6b0aae375a530c8f0de1327bae2eef55.jpg" alt="" />
                    <footer>
                        <strong>Yasuo True Damage</strong>
                        <p>Destruidor da SoloQ</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>

                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://i.pinimg.com/originals/6b/0a/ae/6b0aae375a530c8f0de1327bae2eef55.jpg" alt="" />
                    <footer>
                        <strong>Yasuo True Damage</strong>
                        <p>Destruidor da SoloQ</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>

                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://i.pinimg.com/originals/6b/0a/ae/6b0aae375a530c8f0de1327bae2eef55.jpg" alt="" />
                    <footer>
                        <strong>Yasuo True Damage</strong>
                        <p>Destruidor da SoloQ</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>

                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://i.pinimg.com/originals/6b/0a/ae/6b0aae375a530c8f0de1327bae2eef55.jpg" alt="" />
                    <footer>
                        <strong>Yasuo True Damage</strong>
                        <p>Destruidor da SoloQ</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>

                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}