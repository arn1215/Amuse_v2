

const Card = ({ songs }) => {
  return (
    <div className="p-6">
      <div class="card rounded-md card-compact w-72 bg-base-100  hover:shadow-lg shadow-md transition-all">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">{songs?.title}</h2>
          <p>Description</p>
          <div class="card-actions justify-end">
            <button class="btn-secondary btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card