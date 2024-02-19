import {library, gramedia, togamas} from '../assets'
import "./css/Dashboard.css"

const Dashboard = () => {
    return ( 
        <div className="dashboard">
            <h2 className="page__title">Dashboard</h2>

            <div className="dashboard__content">
                <article className="dashboard__card">
                    <img src={library} alt="" className="dashboard__img" />

                    <div className="dashboard__card-data">
                        <div className="dashboard__card-number">23</div>
                        <div className="dashboard__card-title">Total Buku</div>
                    </div>
                </article>

                <article className="dashboard__card">
                    <img src={gramedia} alt="" className="dashboard__img" />

                    <div className="dashboard__card-data">
                        <div className="dashboard__card-number">23</div>
                        <div className="dashboard__card-title">Total Buku</div>
                    </div>
                </article>

                <article className="dashboard__card">
                    <img src={togamas} alt="" className="dashboard__img" />

                    <div className="dashboard__card-data">
                        <div className="dashboard__card-number">23</div>
                        <div className="dashboard__card-title">Total Buku</div>
                    </div>
                </article>
            </div>
        </div>
     );
}
 
export default Dashboard;