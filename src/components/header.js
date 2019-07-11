import React from 'react'

const menu = [{ title: "About us" }, { title: "Career" },
{
    title: "Departments", sub: ["Marketing & PR", "Customer Success & Sales",
        'IT, Product, Design & UX', 'Finance & Administration', 'HR & more']
}]
const paragraphe = [
    "We want patients to find the perfect doctor and book an appointment in the most easy way.The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere."
,"We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients."
]
const Header = () => {
    return (
        <header>
            <section className="top">
                <div className="top1">
                    <div>
                        <img style={{ width: '310px', height: '33px' }} alt=""
                            src="data:image/png;base64,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" />
                    </div>
                    <div>
                        <ul className="menu">
                            {menu.map(el =>
                                <li className="dropdown">{el.title}
                                    {(el.sub) ?
                                        <div className="dropdown-content">
                                            {el.sub.map(e =>
                                                <a href="#">{e}</a>)
                                            }
                                        </div>
                                        : ""}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </section>
            <div className="mid">
                <img src="https://www.docplanner.com/img/sygnet.png" />
                <br /><br />
                Making the healthcare experience more human
    </div>
    <ul className="paragraphe">

    </ul>
    <ul className="paragraphe">
        {paragraphe.map(el =>
        <li>{el}</li>)}
    </ul>
        </header>

)}
        
        
export default Header