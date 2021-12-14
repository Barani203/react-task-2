import "./table.css"

export default function Table(props){
    return    <div class="col-lg-3 col-md-6">       
    <div class="card text-center card-shadow on-hover border-0 mb-4">
      <div class="card-body font-14">
      <span class="badge badge-inverse p-2 position-absolute price-badge font-weight-normal">{props.data.pop}</span>
        <h5 class="mt-3 mb-1 font-weight-medium">{props.data.basic}</h5>
        <h6 class="subtitle font-weight-normal">{props.data.team}</h6>
        <div class="pricing my-3">
          <sup>{props.data.sup}</sup>
          <span class="monthly display-5">{props.data.price}</span>
          <span class="yearly display-5">240</span>
          <small class="monthly">/mo</small>
          <small class="yearly">/yr</small>
          <span class="d-block">Save <span class="font-weight-medium">{props.data.price1}</span> a Year</span>
        </div>
        <ul class="list-inline ">


         {
           props.data.feature.map(obj=><i><b><p>{obj.small}</p></b></i>)
         }



          {/* <li class="d-block py-2">{props.data.small}</li>
          <li class="d-block py-2">{props.data.Unlimited}</li>
          <li class="d-block py-2">{props.data.Project}</li>
          <li class="d-block py-2">&nbsp;</li>
          <li class="d-block py-2">&nbsp;</li>
          <li class="d-block py-2">{props.data.manege}</li>
              <li class="d-block py-2">{props.data.time}</li> */}
        </ul>
        <div class="bottom-btn">
          <a class="btn btn-success-gradiant btn-md text-white btn-block" href="#f1"><span>Choose Plan</span></a>
        </div>
      </div>
    </div>
  </div>
  
}