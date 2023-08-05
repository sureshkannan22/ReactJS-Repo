import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {

@@ -13,9 +14,11 @@ const Main = () => {
                        recipies served with a modern twist.
                    </p>
                    <div>
                        <button className="button">
                            Reserve a Table
                        </button>
                        <Link to="/bookingPage">
                            <button className="button">
                                Reserve a Table
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="hero-sectoion-image-container">
                </div>
            </section>
            <section className="highlights-section">
                <div className="highlights-header">
                    <h1>This weeks specials!</h1>
                    <button className="button">
                        Online Menu
                    </button>
                </div>
                <div className="highlights">
                </div>
            </section>
        </main>
    );
};
export default Main;