class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '
        <header  id="navbar">
    
        <button id="mobile-nav-toggle" class="mobile-nav-toggle" aria-controls="navigation" aria-expanded="false"><i class="bx bx-menu"></i></button>
    
        <nav>
            <center>
                <ul class="navigation" id="navigation">
                    <div class="brand-mode">
                        <li class="logo_nav" id="logo_nav">
                            <div>
                                <a href="index.html"><img id="logo_nav_img" src="img/icons/final_icon_with_text.webp" alt="" width="180px"></a>
                            </div>
                        </li>
                    </div>
                    <div class="menus"  data-visible="false">
                        <li>
                            <a href="projects">Projects</a>
                        </li>
                        <li><a href="index#solutions">Solutions</a>
                            <ul>
                                <li><a href="brand-content-creation">Brand Content Creation</a></li>
                                <hr style="color: #ccc">
                                <li><a href="website_building">Website Creation</a></li>
                                <hr style="color: #ccc">
                                <li><a href="seo">Search Engine Optimization</a></li>
                            </ul>
                        </li>
    
                        <li><a href="blog">Blog</a></li>
    
                        <li class="nav-btns">
                            <li class="contact-btn">
                                <button onclick="document.getElementById("contactModal").style.display="grid"; document.querySelector("body").style.overflowY="hidden"">Contact</button>
                            </li>
    
                            <li class="language-li"><button class="language-btn">EN
                                <ul class="languages">
                                    <li><a href="de-de">DE</a></li>
                                    <hr>
                                    <li><a href="fr-fr">FR</a></li>
                                    <hr>
                                    <li><a href="jap">JAP</a></li>
                                    <hr>
                                    <li><a href="ua">UA</a></li>
                                    <hr>
                                    <li><a href="rus">RUS</a></li>
                                </ul></button>
                            </li>
                        </li>
                    </div>
    
                </ul>
            </center>
            <script src="scripts/nav.js" defer></script>
        </nav>
    </header>
    
    <section id="contactModal">
        <span onclick="document.getElementById("contactModal").style.display="none"; document.querySelector("body").style.overflowY="scroll"" class="modal_close" title="Close Modal">&times;</span>
        <div class="contact-info">
            <h4>We gladly help you</h4>
            <div class="divider50"></div>
            <div class="container">
                <div class="contact-way">
                    <img src="img/avatar2.png" alt="" width="70px">
                    <div class="contact-text">
                        <a href="mailto:emil@maple-ink.com">emil@maple-ink.com</a><br>
                        <a href="tel:01751969007">+49 157 / 1969 007</a>
                        <p>Emil Becher</p>
                    </div>
                </div>
                <br>
                <br>
    
                <div class="contact-way">
                    <img src="img/avatar2.png" alt="" width="70px">
                    <div class="contact-text">
                        <a href="mailto:info@maple-ink.com">info@maple-ink.com</a>
                        <p>Our E-Mail Adress</p>
                    </div>
                </div>
                <br>
                <br>
    
                <div class="contact-way">
                    <img src="img/avatar2.png" alt="" width="70px">
                    <div class="contact-text">
                        <a href="tel:+491571969007">+49 157 / 1969 007</a>
                        <p>Our Phone Number</p>
                    </div>
                </div>
            </div>
    
            <div class="divider50"></div>
    
            <div>
                <p><b>Maple Ink - Software inh. Emil Becher</b></p>
                <p>Postfach 42 01 30</p>
                <p>48068 Münster</p>
                <p>Germany</p>
            </div>
        </div>
        <div class="contact-form">
            <form action="includes/contact_form.inc.php" method="post" class="modal-content">
                <input name="name" type="text" placeholder="Jane Doe" required><br><br>
                <input name="company" type="text" placeholder="Doe Inc." required><br><br>
                <input name="mail" type="text" placeholder="info@doe.com" required><br><br>
                <input name="subject" type="hidden" value="Contact Form on mapleink.com"><br><br>
                <textarea name="message" placeholder="Write here your message to us..." rows="8" cols="80" required></textarea><br>
                <button type="submit" name="submit">send</button>
            </form>
        </div>
    </section>
    
        '
    }
}