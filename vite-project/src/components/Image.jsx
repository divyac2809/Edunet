
import daredevil1 from '../assets/daredevil.jpg'

const Image = () => {
  return (
    <div>
        <img src={daredevil1} height="200" width="200"/>
        <br/>
        <img src={'/src/assets/daredevil.jpg'}/>
    </div>

  )
}

export default Image