import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Notfound.css'
const NotFound = () => {
    const style = {
        textAlign: 'center',
        height: '83vh',
    }
    return (
        <div className="container">
        <Navbar></Navbar>
        <div className='d-flex flex-column align-items-center justify-content-center' style={style}>
            <div className='content-404'>
                <svg className='img-fluid svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 751 323">
                    <path fill="#CCC" d="M280.3 322.2c-.4 0-.7-.3-.7-.7v-66.4c0-.4.3-.7.7-.7.4 0 .7.3.7.7v66.4c.1.4-.2.7-.7.7z"></path>
                    <path fill="none" class="dash-line" stroke="#282b30" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" d="M263.2 319.5h86"></path>
                    <path fill="#F2F2F2" d="M21.8 320.9c0-7.1 5.7-12.8 12.8-12.8 7 0 12.8 5.7 12.8 12.8"></path>
                    <path fill="#CCC" d="M34.6 320.9c-.2 0-.3-.2-.3-.3v-6.7c0-.2.2-.3.3-.3s.3.2.3.3v6.7c0 .1-.1.3-.3.3z"></path>
                    <path fill="#CCC" d="M34.6 318.6c-.1 0-.2 0-.2-.1l-4.1-3.6c-.1-.1-.2-.3 0-.5.1-.1.3-.2.5 0l4.1 3.6c.1.1.2.3 0 .5-.1 0-.2.1-.3.1z"></path>
                    <path fill="#F2F2F2" d="M61.2 320.9c0-7.1 5.7-12.8 12.8-12.8 7 0 12.8 5.7 12.8 12.8"></path>
                    <path fill="#CCC" d="M73.9 320.9c-.2 0-.3-.2-.3-.3v-6.7c0-.2.2-.3.3-.3.2 0 .3.2.3.3v6.7c.1.1-.1.3-.3.3z"></path>
                    <path fill="#CCC" d="M73.9 318.6c-.1 0-.2 0-.2-.1l-4.1-3.6c-.1-.1-.2-.3 0-.5.1-.1.3-.2.5 0l4.1 3.6c.1.1.2.3 0 .5-.1 0-.2.1-.3.1z"></path>
                    <path fill="#E6E6E6" d="M161.3 268.9c0-13.2-10.7-44.4-23.8-44.4-13.1 0-23.8 31.2-23.8 44.4s10.7 23.8 23.8 23.8c13.1 0 23.8-10.6 23.8-23.8z"></path>
                    <path fill="#F2F2F2" d="M155.3 268.9c0-13.2-10.7-44.4-23.8-44.4-13.1 0-23.8 31.2-23.8 44.4s10.7 23.8 23.8 23.8c13.2 0 23.8-10.6 23.8-23.8z"></path>
                    <path fill="#CCC" d="M132.3 322.2c-.4 0-.7-.3-.7-.7v-66.4c0-.4.3-.7.7-.7s.7.3.7.7v66.4c0 .4-.3.7-.7.7z"></path>
                    <path fill="#CCC" d="M132.3 265.9c-.4 0-.7-.3-.7-.7 0-.2.1-.4.2-.5l9.7-9.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-9.7 9.7c-.2.1-.4.1-.6.1z"></path>
                    <path fill="#E6E6E6" d="M485.7 268.9c0-13.2-10.7-44.4-23.8-44.4-13.1 0-23.8 31.2-23.8 44.4s10.7 23.8 23.8 23.8c13.1 0 23.8-10.6 23.8-23.8z"></path>
                    <path fill="#F2F2F2" d="M479.7 268.9c0-13.2-10.7-44.4-23.8-44.4-13.1 0-23.8 31.2-23.8 44.4s10.7 23.8 23.8 23.8c13.2 0 23.8-10.6 23.8-23.8z"></path>
                    <path fill="#CCC" d="M456.7 265.9c-.4 0-.7-.3-.7-.7 0-.2.1-.4.2-.5l9.7-9.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-9.7 9.7c-.2.1-.4.1-.6.1z"></path>
                    <path fill="#E6E6E6" d="M211.2 64.8h-11.9c-1.8 0-3.3-1.5-3.3-3.4V33.9c0-1.9 1.5-3.4 3.3-3.4h11.9c1.8 0 3.3 1.5 3.3 3.4v27.6c0 1.8-1.5 3.3-3.3 3.3z"></path>
                    <path fill="#E6E6E6" d="M258 321.9h-61c-3.5 0-6.3-2.8-6.3-6.3V68.9c0-3.5 2.8-6.3 6.3-6.3h61c3.5 0 6.3 2.8 6.3 6.3v246.6c0 3.5-2.8 6.4-6.3 6.4z"></path>
                    <path fill="#F2F2F2" d="M221.6 321.9h-61c-3.5 0-6.3-2.8-6.3-6.3V68.9c0-3.5 2.8-6.3 6.3-6.3h61c3.5 0 6.3 2.8 6.3 6.3v246.6c0 3.5-2.8 6.4-6.3 6.4z"></path>
                    <path fill="#F2F2F2" d="M200 64.8h-11.9c-1.8 0-3.3-1.5-3.3-3.4V33.9c0-1.9 1.5-3.4 3.3-3.4H200c1.8 0 3.3 1.5 3.3 3.4v27.6c0 1.8-1.5 3.3-3.3 3.3z"></path>
                    <path fill="#FFF" d="M184.4 118.5h-14.1c-1 0-1.9-.8-1.9-1.9V95c0-1 .8-1.9 1.9-1.9h14.1c1 0 1.9.8 1.9 1.9v21.6c-.1 1.1-.9 1.9-1.9 1.9zM211.9 118.5h-14.1c-1 0-1.9-.8-1.9-1.9V95c0-1 .8-1.9 1.9-1.9h14.1c1 0 1.9.8 1.9 1.9v21.6c0 1.1-.9 1.9-1.9 1.9zM184.4 158h-14.1c-1 0-1.9-.8-1.9-1.9v-21.6c0-1 .8-1.9 1.9-1.9h14.1c1 0 1.9.8 1.9 1.9v21.6c-.1 1-.9 1.9-1.9 1.9zM211.9 158h-14.1c-1 0-1.9-.8-1.9-1.9v-21.6c0-1 .8-1.9 1.9-1.9h14.1c1 0 1.9.8 1.9 1.9v21.6c0 1-.9 1.9-1.9 1.9zM184.4 197.5h-14.1c-1 0-1.9-.8-1.9-1.9V174c0-1 .8-1.9 1.9-1.9h14.1c1 0 1.9.8 1.9 1.9v21.6c-.1 1-.9 1.9-1.9 1.9zM211.9 197.5h-14.1c-1 0-1.9-.8-1.9-1.9V174c0-1 .8-1.9 1.9-1.9h14.1c1 0 1.9.8 1.9 1.9v21.6c0 1-.9 1.9-1.9 1.9zM184.4 236.9h-14.1c-1 0-1.9-.8-1.9-1.9v-21.6c0-1 .8-1.9 1.9-1.9h14.1c1 0 1.9.8 1.9 1.9V235c-.1 1.1-.9 1.9-1.9 1.9zM211.9 236.9h-14.1c-1 0-1.9-.8-1.9-1.9v-21.6c0-1 .8-1.9 1.9-1.9h14.1c1 0 1.9.8 1.9 1.9V235c0 1.1-.9 1.9-1.9 1.9zM184.4 276.4h-14.1c-1 0-1.9-.8-1.9-1.9V253c0-1 .8-1.9 1.9-1.9h14.1c1 0 1.9.8 1.9 1.9v21.6c-.1 1-.9 1.8-1.9 1.8zM211.9 276.4h-14.1c-1 0-1.9-.8-1.9-1.9V253c0-1 .8-1.9 1.9-1.9h14.1c1 0 1.9.8 1.9 1.9v21.6c0 1-.9 1.8-1.9 1.8z"></path>
                    <path fill="#E6E6E6" d="M518.4 195.2h-11.9c-1.8 0-3.3-1.5-3.3-3.4v-15.6c0-1.9 1.5-3.4 3.3-3.4h11.9c1.8 0 3.3 1.5 3.3 3.4v15.6c.1 1.9-1.4 3.4-3.3 3.4zM618.9 322.6h-61c-3.5 0-6.3-2.8-6.3-6.3V197.8c0-3.5 2.8-6.3 6.3-6.3h61c3.5 0 6.3 2.8 6.3 6.3v118.5c0 3.5-2.8 6.3-6.3 6.3z"></path>
                    <path fill="#F2F2F2" d="M582.4 322.6H476.8c-3.5 0-6.3-2.8-6.3-6.3V197.8c0-3.5 2.8-6.3 6.3-6.3h105.7c3.5 0 6.3 2.8 6.3 6.3v118.5c-.1 3.5-2.9 6.3-6.4 6.3z"></path>
                    <path fill="#F2F2F2" d="M507.3 195.2h-11.9c-1.8 0-3.3-1.5-3.3-3.4v-15.6c0-1.9 1.5-3.4 3.3-3.4h11.9c1.8 0 3.3 1.5 3.3 3.4v15.6c0 1.9-1.5 3.4-3.3 3.4z"></path>
                    <path fill="#FFF" d="M522.9 250h-14.1c-1 0-1.9-.8-1.9-1.9v-21.6c0-1 .8-1.9 1.9-1.9h14.1c1 0 1.9.8 1.9 1.9v21.6c0 1-.9 1.9-1.9 1.9zM550.4 250h-14.1c-1 0-1.9-.8-1.9-1.9v-21.6c0-1 .8-1.9 1.9-1.9h14.1c1 0 1.9.8 1.9 1.9v21.6c0 1-.8 1.9-1.9 1.9zM522.9 289.5h-14.1c-1 0-1.9-.8-1.9-1.9V266c0-1 .8-1.9 1.9-1.9h14.1c1 0 1.9.8 1.9 1.9v21.6c0 1-.9 1.9-1.9 1.9zM550.4 289.5h-14.1c-1 0-1.9-.8-1.9-1.9V266c0-1 .8-1.9 1.9-1.9h14.1c1 0 1.9.8 1.9 1.9v21.6c0 1-.8 1.9-1.9 1.9z"></path>
                    <path fill="#E6E6E6" d="M251.4 323H.2c-.1 0-.2-.3-.2-.7 0-.4.1-.7.2-.7h251.1c.1 0 .2.3.2.7.1.4 0 .7-.1.7zM750.8 323H499.6c-.1 0-.2-.3-.2-.7 0-.4.1-.7.2-.7h251.1c.1 0 .2.3.2.7.1.4 0 .7-.1.7zM309.4 268.9c0-13.2-10.7-44.4-23.8-44.4-13.1 0-23.8 31.2-23.8 44.4s10.7 23.8 23.8 23.8c13.1 0 23.8-10.6 23.8-23.8z"></path>
                    <path fill="#F2F2F2" d="M303.4 268.9c0-13.2-10.7-44.4-23.8-44.4-13.1 0-23.8 31.2-23.8 44.4s10.7 23.8 23.8 23.8c13.2 0 23.8-10.6 23.8-23.8z"></path>
                    <path fill="#CCC" d="M280.3 265.9c-.4 0-.7-.3-.7-.7 0-.2.1-.4.2-.5l9.7-9.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-9.7 9.7c-.2.1-.4.1-.6.1z"></path>
                    <path fill="#E6E6E6" d="M689.6 268.9c0-13.2-10.7-44.4-23.8-44.4-13.1 0-23.8 31.2-23.8 44.4s10.7 23.8 23.8 23.8c13.1 0 23.8-10.6 23.8-23.8z"></path>
                    <path fill="#F2F2F2" d="M683.6 268.9c0-13.2-10.7-44.4-23.8-44.4S636 255.7 636 268.9s10.7 23.8 23.8 23.8 23.8-10.6 23.8-23.8z"></path>
                    <path fill="#CCC" d="M660.5 322.2c-.4 0-.7-.3-.7-.7v-66.4c0-.4.3-.7.7-.7s.7.3.7.7v66.4c.1.4-.3.7-.7.7z"></path>
                    <path fill="#CCC" d="M660.5 265.9c-.4 0-.7-.3-.7-.7 0-.2.1-.4.2-.5l9.7-9.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-9.7 9.7c-.2.1-.4.1-.6.1z"></path>
                    <path fill="#FFF" d="M581.2 278.8c0-.1.1-.3.3-.3.1 0 .3.1.3.3 0 .1-.1.2-.2.2v.6c0 .1 0 .1-.1.1s-.1 0-.1-.1v-.6c-.2 0-.2-.1-.2-.2z"></path>
                    <path fill="#F2F2F2" d="M679.5 320.9c0-7.1 5.7-12.8 12.8-12.8 7 0 12.7 5.7 12.8 12.8"></path>
                    <path fill="#CCC" d="M692.3 320.9c-.2 0-.3-.2-.3-.3v-6.7c0-.2.2-.3.3-.3.2 0 .3.2.3.3v6.7c0 .1-.1.3-.3.3z"></path>
                    <path fill="#CCC" d="M692.3 318.6c-.1 0-.2 0-.2-.1l-4.1-3.6c-.1-.1-.2-.3 0-.5.1-.1.3-.2.5 0l4.1 3.6c.1.1.2.3 0 .5-.1 0-.2.1-.3.1z"></path>
                    <path fill="#F2F2F2" d="M718.9 320.9c0-7.1 5.7-12.8 12.8-12.8 7 0 12.7 5.7 12.8 12.8"></path>
                    <path fill="#CCC" d="M731.7 320.9c-.2 0-.3-.2-.3-.3v-6.7c0-.2.2-.3.3-.3.2 0 .3.2.3.3v6.7c0 .1-.2.3-.3.3z"></path>
                    <path fill="#CCC" d="M731.7 318.6c-.1 0-.2 0-.2-.1l-4.1-3.6c-.1-.1-.2-.3 0-.5.1-.1.3-.2.5 0l4.1 3.6c.1.1.2.3 0 .5-.2 0-.3.1-.3.1z"></path>
                    <path fill="#282B30" d="M365.2 322.6c1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1 0 1.7 1.4 3.1 3.1 3.1z"></path>
                    <path fill="none" class="dash-line" stroke="#282b30" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" d="M472.2 319.5h86"></path>
                    <path fill="#282B30" d="M574.2 322.6c1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1 0 1.7 1.4 3.1 3.1 3.1z"></path>
                    <path fill="#1CC0C6" d="M456.2 172.7c-28.3-28.3-28.3-74.2 0-102.5 28.3-28.3 74.1-28.3 102.4 0s28.3 74.2 0 102.5c-28.3 28.3-74.1 28.3-102.4 0z"></path>
                    <path fill="#FFF" d="M487.2 127.4h4.3v6.1h-4.3v8.2h-7.6v-8.2H464l-.3-4.8 15.9-25.1h7.6v23.8zm-16 0h8.4V114l-.5.9-7.9 12.5zM521.1 126c0 2.9-.3 5.3-.9 7.4-.6 2-1.5 3.7-2.6 5.1a10.3 10.3 0 01-4 2.9c-1.6.6-3.3.9-5.2.9-1.9 0-3.7-.3-5.2-.9-1.6-.6-2.9-1.6-4.1-2.9-1.1-1.3-2-3-2.6-5.1-.6-2-.9-4.5-.9-7.4v-6.6c0-2.9.3-5.3.9-7.4.6-2 1.5-3.7 2.6-5 1.1-1.3 2.5-2.3 4.1-2.9 1.6-.6 3.3-.9 5.2-.9s3.7.3 5.2.9c1.6.6 2.9 1.6 4.1 2.9 1.1 1.3 2 3 2.6 5 .6 2 .9 4.5.9 7.4l-.1 6.6zm-7.5-7.7c0-1.7-.1-3.1-.4-4.3-.2-1.1-.6-2.1-1-2.8-.5-.7-1-1.2-1.7-1.5-.7-.3-1.4-.5-2.2-.5-.8 0-1.6.2-2.2.5-.7.3-1.2.8-1.7 1.5s-.8 1.6-1 2.8c-.2 1.2-.4 2.6-.4 4.3v8.7c0 1.7.1 3.1.4 4.3.2 1.2.6 2.1 1 2.8.5.7 1 1.2 1.7 1.6.7.3 1.4.5 2.2.5.8 0 1.6-.2 2.2-.5.7-.3 1.2-.8 1.7-1.6.4-.7.8-1.7 1-2.8.2-1.2.4-2.6.4-4.3v-8.7zM548.6 127.4h4.3v6.1h-4.3v8.2H541v-8.2h-15.6l-.3-4.8 15.9-25.1h7.6v23.8zm-16 0h8.4V114l-.5.9-7.9 12.5z"></path>
                    <path fill="#282B30" d="M345.7 146.8l44.1-4.5-2.5-16.6-42.4 12.4.8 8.7z"></path>
                    <path fill="#282B30" d="M389.8 142.3l34.8-34.9c2.9-2.9 2.9-7.5 0-10.3-2.8-2.9-7.5-2.9-10.3 0L379.5 132l10.3 10.3zM339.1 134.6h5.8c3.6 0 6.5 2.9 6.5 6.5 0 3.2-2.6 5.7-5.7 5.7h-13.1v-5.7c0-3.6 2.9-6.5 6.5-6.5zM320.2 141.9h1.6v-8.2c0-4.3 3.5-7.8 7.8-7.8h8.7v-1.6h-8.7c-5.2 0-9.4 4.2-9.4 9.4v8.2z"></path>
                    <path fill="#282B30" d="M313.8 159.7c.9 0 1.6-.7 1.6-1.6V148c0-2.4 2-4.4 4.4-4.4h6.5c.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6h-6.5c-4.2 0-7.5 3.4-7.5 7.5v10.2c-.1.9.6 1.6 1.5 1.6z"></path>
                    <path fill="#282B30" d="M329.7 145.7h16.6c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7h-16.6c-1.9 0-3.5 1.6-3.5 3.5v.4c0 1.9 1.6 3.5 3.5 3.5zM333.1 126.9c-.8-3.4 1.3-6.8 4.7-7.6 3.4-.8 6.8 1.3 7.6 4.7.8 3.4-1.3 6.8-4.7 7.6-3.4.8-6.8-1.3-7.6-4.7zM347.4 271.4h13.2l-.4 10.3h-22.4c-.7-5.7 3.9-10.3 9.6-10.3z"></path>
                    <path fill="#0C8387" d="M334.9 197.8l9.8 63.9.3 2 1.2 7.8h14.5v-91.8H353c-10-.1-18.1 8-18.1 18.1z"></path>
                    <path fill="#282B30" d="M445.4 205.7h27.9V194h-36.5v3.2c0 4.7 3.8 8.5 8.6 8.5z"></path>
                    <path fill="#282B30" d="M467.2 194h60.1v3h-13.1l-36.4 20-1.4-2.6 31.7-17.4h-40.8v-3z"></path>
                    <path fill="#40434D" d="M519.3 201.6h8.1v-4.7h-10.7v2c-.1 1.5 1.1 2.7 2.6 2.7z"></path>
                    <path fill="#DB4B4B" d="M529 201.6h-1.7v-4.7h1.7c.7 0 1.2.6 1.2 1.2v2.2c0 .8-.6 1.3-1.2 1.3z"></path>
                    <path fill="#282B30" d="M327 277.3h71.8v5.1H327v-5.1zM230.2 271.8c2.2-3.8 5.1-7.1 8.5-9.8 5.8-4.6 13.1-7.3 21-7.3 18.1 0 32.9 14.1 34 31.9.1.7.1 1.5.1 2.2 0 2.3-.2 4.6-.7 6.8-3.1 15.6-16.9 27.3-33.4 27.3-18.8 0-34.1-15.3-34.1-34.1 0-6.2 1.7-12 4.6-17zm29.5 37.2c10.6 0 19.2-8.1 20.1-18.4.1-.6.1-1.1.1-1.7 0-3.4-.9-6.7-2.4-9.5-3.4-6.3-10.1-10.7-17.8-10.7-1.6 0-3.2.2-4.8.6-4.6 1.1-8.6 3.9-11.4 7.6-2.5 3.4-4 7.5-4 12 .1 11.1 9.1 20.1 20.2 20.1zM274.1 245.9l-1.7 3.8 5.4 3.9-3.7-7.7zM285.2 193h10.4v25.9h-10.4V193z"></path>
                    <path fill="#282B30" d="M276.8 177.3v15.8c0 2.1 1.7 3.7 3.7 3.7h10c6.6 0 12.3-5.4 12.1-12-.1-3.1-1.4-5.9-3.4-7.9-2.1-2.1-5-3.4-8.2-3.4h-10.5c-2 .1-3.7 1.8-3.7 3.8zM512.9 229.2h13.5v20.4h-13.5v-20.4zM473.9 254.7c18.8 0 34.1 15.3 34.1 34.1s-15.3 34.1-34.1 34.1-34.1-15.3-34.1-34.1 15.2-34.1 34.1-34.1zm0 54.3c11.1 0 20.1-9 20.1-20.2 0-11.1-9-20.1-20.1-20.1-11.1 0-20.1 9-20.1 20.1-.1 11.2 9 20.2 20.1 20.2zM369.4 281.9h22.8v-12.6c0 12.5-10.2 12.6-22.8 12.6zM357.7 282.4h-45.6v-45.6c0 25.2 20.4 45.6 45.6 45.6z"></path>
                    <path fill="#4B4E59" d="M443.8 272.8c1.1-2.1 2.5-4.1 4-5.9 6.2-7.4 15.6-12.1 26-12.1s19.8 4.7 26 12.1c1.6 1.8 2.9 3.8 4 5.9 2.6 4.8 4 10.3 4 16.1h-14c0-6.6-3.1-12.4-8-16.1-3.4-2.6-7.6-4.1-12.1-4.1s-8.7 1.5-12.1 4.1c-4.9 3.7-8 9.5-8 16.1h-14c.2-5.9 1.6-11.3 4.2-16.1z"></path>
                    <path fill="#282B30" d="M405.9 282.5h47.2v13.3h-47.2v-13.3z"></path>
                    <path fill="#282B30" d="M405.9 288.8h43.7v7h-43.7v-7zM289.7 205.4l5.5 4.1 23.1-49.5-5.5-4.1-23.1 49.5z"></path>
                    <path fill="#282B30" d="M313.3 163.7h9.2c1.5 0 2.7-1.2 2.7-2.7v-5.6c0-1.5-1.2-2.7-2.7-2.7h-9.2c-1.5 0-2.7 1.2-2.7 2.7v5.6c0 1.4 1.2 2.7 2.7 2.7z"></path>
                    <path fill="#C8C5C3" d="M328.3 141.9h1.6v-8.2c0-4.3 3.5-7.8 7.8-7.8h8.7v-1.6h-8.7c-5.2 0-9.4 4.2-9.4 9.4v8.2z"></path>
                    <path fill="#899CAB" d="M321.9 159.7c.9 0 1.6-.7 1.6-1.6V148c0-2.4 2-4.4 4.4-4.4h6.5c.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6h-6.5c-4.2 0-7.5 3.4-7.5 7.5v10.2c-.1.9.6 1.6 1.5 1.6z"></path>
                    <path fill="#1CC0C6" d="M337.8 145.7h16.6c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7h-16.6c-1.9 0-3.5 1.6-3.5 3.5v.4c0 1.9 1.6 3.5 3.5 3.5z"></path>
                    <path fill="#282B30" d="M391.2 281.9h27.5l-.2-62.8h-42.7s16.4 8.9 16.4 30.3c0 26.6-1 32.5-1 32.5zM301.4 179.9H312v102.7h-10.6V179.9z"></path>
                    <path fill="#540F89" d="M424.7 263.3h89.4v-24.7c0-23.2-18.8-44.5-41.9-44.5h-47.5v69.2z"></path>
                    <path fill="#282B30" d="M389.4 194.1h84.1c0 12.4-10 25-22.4 25h-75.3v-8.8c.1-7.6 6.1-16.2 13.6-16.2z"></path>
                    <path fill="#652D90" d="M415 255.8h19.1v26.7H415v-26.7z"></path>
                    <path fill="#652D90" d="M418.6 219.1h46.8V266h-46.8v-46.9z"></path>
                    <path fill="#DB4B4B" d="M528.6 249.6h-2.2v-20.4h2.2c2.1 0 3.8 1.7 3.8 3.8v12.8c0 2.1-1.7 3.8-3.8 3.8z"></path>
                    <path fill="#282B30" d="M303 182.9h10.6c2.7 0 4.9-2.2 4.9-4.9v-3.1c0-2.7-2.2-4.9-4.9-4.9h-10.5l-.1 12.9z"></path>
                    <path fill="#C8C5C3" d="M342.9 129.9c-2.5-2.5-2.5-6.4 0-8.9s6.4-2.5 8.9 0 2.5 6.4 0 8.9c-2.4 2.5-6.4 2.5-8.9 0z"></path>
                    <path fill="#F5DED3" d="M364.2 271.3h13.6l-.4 10.6h-23c-.8-5.9 4-10.6 9.8-10.6z"></path>
                    <path fill="#652D90" d="M434.1 266.8H415v15h4.1c8.3.1 15-6.7 15-15z"></path>
                    <path fill="#E79361" d="M412.7 72.2l18.8-4 3.6 17.1-18.8 4-3.6-17.1z"></path>
                    <path fill="#1CC0C6" d="M373.9 176.8v26.8h55.3c2.8 0 5.3-.6 7.6-1.8 5.7-2.8 9.6-8.7 9.6-15.5v-9.6l-72.5.1z"></path>
                    <path fill="#FFF23E" d="M417.7 192.2h6.6v-1.7h-6.6c-4.8 0-8.7-3.9-8.7-8.7v-6.6h-1.7v6.6c-.1 5.7 4.6 10.4 10.4 10.4z"></path>
                    <path fill="#1CC0C6" d="M351.3 195.5l10.1 65.8.3 2 1.2 8h14.9v-94.5H370c-10.3 0-18.7 8.3-18.7 18.7z"></path>
                    <path fill="#D3F4F5" d="M404.6 105.6v71.2h41.9v-71.2c0-11-8.9-19.9-19.9-19.9h-2.1c-3.8 0-7.3 1.1-10.3 2.9-3.3 2-5.9 4.9-7.6 8.3-1.3 2.5-2 5.5-2 8.7z"></path>
                    <path fill="#282B30" d="M406.6 96.8l20.2-7.5-12.6-.8c-3.3 2-5.9 4.8-7.6 8.3zM419.4 122.7l-14.8 35.4v-29.2l14.8-6.2z"></path>
                    <path fill="#D3F4F5" d="M356.8 146.9l44.1-4.5-6-14.9-38.9 10.7.8 8.7z"></path>
                    <path fill="#D3F4F5" d="M400.9 142.4l33.6-33.6c3.5-3.5 3.5-9.2 0-12.7s-9.2-3.5-12.7 0l-42.9 43 22 3.3zM404.6 176.8l32.2 25h.1c5.7-2.8 9.6-8.7 9.6-15.5v-9.6l-41.9.1z"></path>
                    <path fill="#E79361" d="M408.9 76.8l7.6-.1c12.1-.1 21.8-10 21.7-22-.1-8.5-7-15.2-15.4-15.2h-5.3c-8.4.1-15.2 7-15.2 15.4l.1 15.4c0 3.7 2.9 6.6 6.5 6.5z"></path>
                    <path fill="#282B30" d="M402.3 53v5.6s6.7-1.4 7.8-5l1.1-3.6-8.9 3z"></path>
                    <path fill="#E79361" d="M400.2 65.8h2.2l-.1-7.1-3.2 5.3c-.4.8.2 1.8 1.1 1.8z"></path>
                    <path fill="#282B30" d="M432.7 73.9c5.5-7.6 8.3-17.2 8.3-17.2l-17.1-15.2c-7.5.1-6.4 4-6.3 11.5l2.2.3c-2 22.8 12.9 20.6 12.9 20.6z"></path>
                    <path fill="#282B30" d="M416.4 55.8h4.5l-.1-12.3-9 .1.1 7.7c-.1 2.5 2 4.5 4.5 4.5z"></path>
                    <path fill="#282B30" d="M416.3 55.2h3.5l.1 6.9h-3.5l-.1-6.9z"></path>
                    <path fill="#E79361" d="M419.9 66.8h4c2.2 0 4-1.8 4-4.1v-3.2c0-2.2-1.8-4-4.1-4-2.2 0-4 1.8-4 4.1l.1 7.2z"></path>
                    <path fill="#56C4CF" d="M350.2 134.7h5.8c3.6 0 6.5 2.9 6.5 6.5 0 3.2-2.6 5.7-5.7 5.7h-13.1v-5.7c0-3.6 2.9-6.5 6.5-6.5z"></path>
                    <path fill="#282B30" d="M361.4 261.3l.3 2h16.1v-2h-16.4z"></path>
                    <path fill="#D3F4F5" d="M409.3 92.6c.3-.2 4.1-2.7 18.6-1 7.8 1 12.5 7.8 15.2 14.3 2.5 6 3.3 11.7 3.3 11.7l.7-.1c1.1-.2 3.4-.7 5.4-2.2 1.5-1.1 2.8-2.7 3.5-5 1.9-6.8-7-27.5-12.2-28.4-24.9-3.8-34.1 10.1-34.5 10.7z"></path>
                    <path fill="#652D90" d="M395.6 55.1h12c4.1 0 7.5-3.4 7.5-7.5h-27c0 4.2 3.3 7.5 7.5 7.5z"></path>
                    <path fill="#652D90" d="M441 56.8c2.8-12.6-3.2-23.1-14.3-25.6-11.1-2.5-23.2 3.9-26 16.5l40.3 9.1z"></path>
                    <path fill="#282B30" d="M413.7 76.8l7.7-1.7-6.7 6.6-1-4.9z"></path>
                    <path fill="#56C4CF" d="M443.1 105.8v.1l3.3 11.7.7-.1c1.1-.2 3.4-.7 5.4-2.2l-9.4-9.5zM414.3 50.8l10.4-20s-12.6-1.7-16.5-.2c-3.9 1.6-7.6 17-7.6 17l13.7 3.2z"></path>
                    <path fill="#282B30" d="M321.4 309.5c1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1-.1 1.7 1.3 3.1 3.1 3.1zM308.9 303.3H284c-1.7 0-3.1 1.4-3.1 3.1 0 1.7 1.4 3.1 3.1 3.1h24.9c1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1zM534.6 309.5c1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1 0 1.7 1.4 3.1 3.1 3.1z"></path>
                    <path fill="#4B4E59" d="M259.7 254.7c18.8 0 34.1 15.3 34.1 34.1h-14c0-11.1-9-20.1-20.1-20.1-11.1 0-20.1 9-20.1 20.1h-14c0-18.8 15.3-34.1 34.1-34.1z"></path>
                    <path fill="#282B30" d="M522.1 303.3h-24.9c-1.7 0-3.1 1.4-3.1 3.1 0 1.7 1.4 3.1 3.1 3.1h24.9c1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1z"></path>
                    <path class="wheel" fill="#282b30" d="M473.9 259.6c-16.2 0-29.3 13.1-29.3 29.3 0 16.2 13.1 29.3 29.3 29.3s29.3-13.1 29.3-29.3c-.1-16.2-13.2-29.3-29.3-29.3zm17.2 27.5h-8.9c-.7-2.9-3-5.2-5.9-6v-9.4c7.8 1.2 14 7.5 14.8 15.4zm-18.5-15.5v9.4c-3 .7-5.4 3-6.1 6h-9.8c.8-8.2 7.5-14.7 15.9-15.4zm-15.9 19.3h9.7c.7 3 3.1 5.3 6.1 6v9.2c-8.2-.6-14.8-7.1-15.8-15.2zm19.6 15.1v-9.1c2.9-.7 5.2-3 5.9-6h8.8c-.9 7.8-6.9 13.9-14.7 15.1z"></path>
                    <path class="wheel" fill="#282b30" d="M259.7 259.6c-16.2 0-29.3 13.1-29.3 29.3 0 16.2 13.1 29.3 29.3 29.3S289 305 289 288.9c0-16.2-13.1-29.3-29.3-29.3zm17.2 27.5H268c-.7-2.9-3-5.2-5.9-6v-9.4c7.9 1.2 14 7.5 14.8 15.4zm-18.5-15.5v9.4c-3 .7-5.4 3-6.1 6h-9.8c.9-8.2 7.6-14.7 15.9-15.4zm-15.8 19.3h9.7c.7 3 3.1 5.3 6.1 6v9.2c-8.2-.6-14.9-7.1-15.8-15.2zm19.6 15.1v-9.1c2.9-.7 5.2-3 5.9-6h8.8c-.9 7.8-7 13.9-14.7 15.1z"></path>
                    <path fill="#F2F2F2" d="M530.1 35.8c.6-11.9 10.4-21.1 22.3-21.1.7 0 1.3 0 2 .1 8.2-14.2 26.3-19 40.5-10.7 4.4 2.6 8.1 6.3 10.7 10.7.6 0 1.1-.1 1.7-.1 11.9 0 21.6 9.3 22.3 21.1M629.8 143.6c.6-11.9 10.4-21.1 22.3-21.1.7 0 1.3 0 2 .1 8.2-14.2 26.3-19 40.5-10.7 4.4 2.6 8.1 6.3 10.7 10.7.6 0 1.1-.1 1.7-.1 11.9 0 21.6 9.3 22.3 21.1M268.2 35.8c.6-11.9 10.4-21.1 22.3-21.1.7 0 1.3 0 2 .1C300.7.6 318.8-4.2 333 4.1c4.4 2.6 8.1 6.3 10.7 10.7.6 0 1.1-.1 1.7-.1 11.9 0 21.6 9.3 22.3 21.1"></path>
                    <path fill="#E6E6E6" d="M148.7 322.4c2.1 0 3.7-1.7 3.7-3.8 0-2.1-1.7-3.8-3.7-3.8-2.1 0-3.7 1.7-3.7 3.8-.1 2.1 1.6 3.8 3.7 3.8z"></path>
                    <path fill="#282B30" d="M230.2 271.8l13.3 5 36.2 13.7 13.4 5.1c.4-2.2.7-4.5.7-6.8 0-.7 0-1.5-.1-2.2l-16.2-7.3-22.5-10-16.2-7.3c-3.5 2.7-6.4 6-8.6 9.8z"></path>
                    <path fill="#899CAB" d="M258.1 292.8c2.1.9 4.6 0 5.6-2.2l21.6-48.9c.9-2.1 0-4.6-2.2-5.6-2.1-.9-4.6 0-5.6 2.2l-21.6 48.9c-.9 2.1 0 4.6 2.2 5.6z"></path>
                    <path fill="#540F89" d="M301.4 293.1v-2c0-24.3-15.1-42.7-39.4-42.7-12.4 0-25.6 7-33.6 15.2l73 29.5z"></path>
                    <path fill="#FFF23E" d="M272.4 249.7l19.7 39.9 8.9 3.3-26.9-47-1.7 3.8z"></path>
                    <path fill="#652D90" d="M274.1 245.9c23.7 48.9 23.4 49.9 32.5 49.9h108.3v-14l-92 .1c-2.5-.1-6.9-1.5-10.9-8.3-4.8-8.1-9.1-23.9-9.3-53.9v-3.3c0-13.3.1-27.5.2-36.6.1-6 .1-9.8.1-9.8l-20.5 54-1 2.7-7.4 19.2z"></path>
                    <path fill="#FFF23E" d="M281.4 226.7c8.4 0 15-2.5 20-6 .5-.3 1-.7 1.4-1 4.1-3.1 7.1-6.8 9.3-10.3v-5.3c-1.7 3.7-4.6 8.4-9.3 12.3-.4.4-.9.8-1.4 1.1-4.6 3.5-10.8 6.2-19 6.4l-1 2.8z"></path>
                    <path fill="#652D90" d="M415 260.1v6.8h109.8v-6.8c0-8.1-2.3-15.6-6.4-22l-1.8-2.7c-7.5-10-19.5-16.5-32.9-16.5h-27.6c-22.6.1-41.1 18.5-41.1 41.2z"></path>
                    <path fill="#FFF23E" d="M496.6 258.5h23.3v2.8h-23.3v-2.8zM496.6 252.9h23.3v2.8h-23.3v-2.8zM432.8 252.9h2.7c0-8.2 6.6-14.8 14.8-14.8h68.2l-1.8-2.7h-66.4c-9.7 0-17.5 7.9-17.5 17.5z"></path>
                </svg>

                <h3>The page you’re looking for can’t be found.</h3>
                <p>Please check if your spelling is correct and try again</p>
                <Link className='link' to="/home"><button style={{padding: '10px 30px',borderRadius: '30px'}} id="signIn" className="btn styleBtn">Go to Home</button></Link>
            </div>
        </div>
        </div>
    );
};

export default NotFound;