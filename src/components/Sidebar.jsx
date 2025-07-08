import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeart, faMugHot } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <aside
            className="h-full w-full max-w-xs text-gray-800 p-6 rounded-none space-y-8">

            {/* Profile */}
            <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Patricia</h2>
                <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
                    <FontAwesomeIcon icon={faEnvelope}/>
                    pattee13@gmail.com
                </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
                <h3 className="text-lg font-semibold mb-1">Navigation</h3>
                <ul className="space-y-1 text-sm">
                    <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
                    <li><a href="#skills" className="hover:underline">Technical Skills</a></li>
                    <li>
                        <a href="#timeline" className="hover:underline">Professional Timeline</a>
                    </li>
                </ul>
            </nav>

            {/* Social Links */}
            <div>
                <h3 className="text-lg font-semibold mb-2">Social & Sites</h3>
                <ul className="space-y-1 text-sm">
                    <li><a href="https://github.com/patricia-work-work" target="_blank" rel="noreferrer"
                           className="hover:underline">PivotCX Github</a></li>
                    <li><a href="https://github.com/haddeeann" target="_blank" rel="noreferrer"
                           className="hover:underline">Personal Github</a></li>
                    <li><a href="https://leetcode.com/pattee/" target="_blank" rel="noreferrer"
                           className="hover:underline">JavaScript LeetCode</a></li>
                    <li><a href="https://leetcode.com/haddeeann/" target="_blank" rel="noreferrer"
                           className="hover:underline">Python LeetCode</a></li>
                    <li><a href="https://codepen.io/pattee" target="_blank" rel="noreferrer"
                           className="hover:underline">CodePen</a></li>
                    <li><a href="https://stackoverflow.com/users/2022724/someone-alive" target="_blank" rel="noreferrer"
                           className="hover:underline">Stack Overflow</a></li>
                    <li><a href="https://www.linkedin.com/in/patricia-green-63a3a4167/" target="_blank" rel="noreferrer"
                           className="hover:underline">LinkedIn</a></li>
                </ul>
            </div>

            {/* Footer */}
            <div className="text-xs text-center text-gray-500 dark:text-gray-400">
                Made with <FontAwesomeIcon icon={faHeart} className="text-red-500 mx-1"/>
                and <FontAwesomeIcon icon={faMugHot} className="text-amber-600 mx-1"/>
            </div>
        </aside>
    );
};

export default Sidebar;
