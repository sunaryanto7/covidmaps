import React, {Fragment} from 'react'

const SideBar = ({displayData = undefined}) => {
	const {label, covidCase} = displayData;
	var displayCovid = null;

    function isEmpty (object){
        for(var key in object) {
            if (object.hasOwnProperty(key)) {
               return false;
            }
        }
        return true;
    }

    function row (value, label) {
        var temporaryCard = null;
        if (isEmpty(displayData)) { return }
        else{
            temporaryCard =
                <>
                	<h4>{label}</h4>
                    <div className="card card-positive card-pill">
                        <div className="card-body">Positive {value.positive}</div>
                    </div>
                    <div className="card card-negative card-pill">
                        <div className="card-body">Positive {value.negative}</div>
                    </div>
                    <div className="card card-control card-pill">
                        <div className="card-body">Positive {value.control}</div>
                    </div>
                </>
            ;
            return temporaryCard;
        }
    }

    displayCovid = row(covidCase, label);

return(
	<Fragment>
		<div className="sidebar-title">
			<h3 className="title"><center>Pemantauan Covid19 </center></h3> 
		</div>	
		<div className="sidebar-content">
			<div className="card card-positive">
				<div className="card-title ">
					<h4 className="title ">Pasien Meninggal</h4>
				</div>
				<div className="card-body">
					<p className="description">
						Berisi tentang jumlah Pasien positive corona yang telah dinyatakan meninggal
					</p>
				</div>
				<div className="card-footer"></div>
			</div>
			<div className="card card-control ">
				<div className="card-title ">
					<h4 className="title ">Pasien Dalam Pengawas</h4>
				</div>
				<div className="card-body">
					<p className="description">
						Berisi tentang jumlah Pasien positive corona yang telah dirawat /diawasi di rumah sakit
					</p>
				</div>
				<div className="card-footer"></div>
			</div>
			<div className="card card-negative">
				<div className="card-title ">
					<h4 className="title ">Pasien Sembuh Corona</h4>
				</div>
				<div className="card-body">
					<p className="description">
						Berisi tentang jumlah Pasien yang Sembuh dari corona
					</p>
				</div>
				<div className="card-footer"></div>
			</div>
		</div>	
		<div className="sidebar-content">
			{displayCovid}
		</div>	
		<div className="sidebar-footer">
			<div className="footer-content">
				<h5 className="copyright">&copy; nadia 2020 / geografi</h5>
			</div>
		</div>	
	</Fragment>
	)
}

export default SideBar;