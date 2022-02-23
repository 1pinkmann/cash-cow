import React, { useEffect, useRef } from 'react';

export default function Menu({ className, opened, sections, menuCallback }) {

    const menu = useRef(null);

    function handleScrollDown(el) {
        const position = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: position, behavior: 'smooth' });
        menuCallback && menuCallback();
    }

    useEffect(() => {
        function closeMenu(e) {
            if (opened && (e.target.closest('.menu--header') !== menu.current)) {
                menuCallback();
            }
        }

        document.addEventListener('click', closeMenu);

        return () => {
            document.removeEventListener('click', closeMenu);
        }
    }, [menuCallback, opened]);

    return (
        <ul className={"menu " + (className ? className : "") + (opened || "")} ref={menu}>
            <li className="menu__item">
                <button className="menu__link" onClick={() => handleScrollDown(sections.current[0])}>Home</button>
            </li>
            <li className="menu__item">
                <button className="menu__link" onClick={() => handleScrollDown(sections.current[1])}>Overview</button>
            </li>
            <li className="menu__item">
                <button className="menu__link" onClick={() => handleScrollDown(sections.current[2])}>How it Works</button>
            </li>
            <li className="menu__item">
                <button className="menu__link" onClick={() => handleScrollDown(sections.current[3])}>Tokenomics</button>
            </li>
            <li className="menu__item">
                <button className="menu__link" onClick={() => handleScrollDown(sections.current[4])}>Roadmap</button>
            </li>
            <li className="menu__item">
                <button className="menu__link" onClick={() => handleScrollDown(sections.current[5])}>FAQ</button>
            </li>
        </ul>
    );
}