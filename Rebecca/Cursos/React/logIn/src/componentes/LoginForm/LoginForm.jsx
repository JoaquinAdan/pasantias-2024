import React from "react";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div class="loginblock signinform">   <div class="logo">
            <a class="brand-logo">Iniciar Sesion</a>
        </div>
        <div class="row map-content-9">
            <div class="info-grids">
                <form action="#" method="post" class="">
                    <div class="form-grid">
                        <div class="input-field">
                            <label>Email </label>
                            <input type="email" name="email" id="email" placeholder="Email" required=""/>
                        </div>
                        <div class="input-field">
                            <label>Contraseña</label>
                            <div class="password-container">
                                <input type="password" class="input-toggle" name="Password1" id="Password1"
                                    placeholder="Contraseña" required=""/>
                                <button type="button" class="button-toggle">
                                    <span class="show-icon" id="togglePassword">
                                        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
                                            stroke-miterlimit="2" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm8.413 7c-1.837 2.878-4.897 5.5-8.413 5.5-3.465 0-6.532-2.632-8.404-5.5 1.871-2.868 4.939-5.5 8.404-5.5 3.518 0 6.579 2.624 8.413 5.5zm-8.411-4c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z"
                                                fill-rule="nonzero" />
                                        </svg>
                                    </span>

                                    <span class="hide-icon">
                                        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
                                            stroke-miterlimit="2" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="m17.069 6.546 2.684-2.359c.143-.125.32-.187.497-.187.418 0 .75.34.75.75 0 .207-.086.414-.254.562l-16.5 14.501c-.142.126-.319.187-.496.187-.415 0-.75-.334-.75-.75 0-.207.086-.414.253-.562l2.438-2.143c-1.414-1.132-2.627-2.552-3.547-4.028-.096-.159-.144-.338-.144-.517s.049-.358.145-.517c2.111-3.39 5.775-6.483 9.853-6.483 1.815 0 3.536.593 5.071 1.546zm2.319 1.83c.966.943 1.803 2.014 2.474 3.117.092.156.138.332.138.507s-.046.351-.138.507c-2.068 3.403-5.721 6.493-9.864 6.493-1.297 0-2.553-.313-3.729-.849l1.247-1.096c.795.285 1.626.445 2.482.445 3.516 0 6.576-2.622 8.413-5.5-.595-.932-1.318-1.838-2.145-2.637zm-3.434 3.019c.03.197.046.399.046.605 0 2.208-1.792 4-4 4-.384 0-.756-.054-1.107-.156l1.58-1.389c.895-.171 1.621-.821 1.901-1.671zm-.058-3.818c-1.197-.67-2.512-1.077-3.898-1.077-3.465 0-6.533 2.632-8.404 5.5.853 1.308 1.955 2.567 3.231 3.549l1.728-1.519c-.351-.595-.553-1.289-.553-2.03 0-2.208 1.792-4 4-4 .925 0 1.777.315 2.455.843zm-2.6 2.285c-.378-.23-.822-.362-1.296-.362-1.38 0-2.5 1.12-2.5 2.5 0 .36.076.701.213 1.011z"
                                                fill-rule="nonzero" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <label class="check-remaind">
                        <input type="checkbox"/>
                        <span class="checkmark"></span>
                        <p class="remember">Recordarme</p>

                    </label>
                    <button type="submit" class="btn btn-primary btn-style">Ingresar</button>
                </form>
            </div>

            <div class="info-grids social-login-details align-self">
                <p class="text-center mb-3">O ingresar con</p>
                <div class="social-media">
                    <a href="#facebook" class="fb"><span class="fa fa-facebook" aria-hidden="true"></span>Facebook</a>
                    <a href="#twitter" class="tw"><span class="fa fa-twitter" aria-hidden="true"></span>Twitter</a>
                </div>
                <p class="text-center mt-4">No estas registrade? <a href="http://127.0.0.1:5500/Rebecca/LoginPagina/signInPage.html">Registrarse</a></p>
            </div>
        </div>
    </div>

  )
}

export default App;
