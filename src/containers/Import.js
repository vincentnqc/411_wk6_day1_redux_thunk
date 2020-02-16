// fill out this container
import { connect } from 'react-redux'
import Import from '../components/Import'
// import { removeCar } action here
import { fetchMakes } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        cars: state.cars,
        makes: state.makes,
    }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
    return {
      fetchMakes: () => dispatch(fetchMakes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Import)