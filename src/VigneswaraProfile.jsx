function VigneswaraProfile() {
    return (
        <main className=" faculty-profile-page">
            <div className="faculty-img">
                <img
                    src="/assets/vigneswara.png"
                    alt="Prof. P. Vigneswara Ilavarasan"
                />
                <div className="faculty-intro">
                    <h2>Prof. P. Vigneswara Ilavarasan</h2>
                    
                    <p className="designation">
                        Professor
                    </p>

                    <p className="research">
                        Area: Digital Technologies, Business & Society;
                         Information Systems

                    </p>
                    <p className="email">
                        <a href="mailto:vignes@iitd.ac.in">
                            <i className="fa-solid fa-envelope" aria-hidden="true" /> vignes@iitd.ac.in
                        </a>
                    </p>
                    <p className="phone">
                        <i className="fa-solid fa-phone" aria-hidden="true" /> +91 (11) 2659-1174
                    </p>

                    <p className="office">
                        Department of Management Studies, IIT Delhi
                    </p>

                    <p className="website">
                        <a
                            href="https://web.iitd.ac.in/~vignes/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /> Faculty Website
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
}

export default VigneswaraProfile;