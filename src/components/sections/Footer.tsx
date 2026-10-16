export const Footer = () => {
  return (
    <footer className="bg-[#f8f8f8] text-[12px] font-light p-5 text-[#666] transition-all duration-2000">
      <div className="max-w-360 mx-auto">
        <div className="flex justify-between gap-20">
          <div className="flex gap-10 items-center">
            <img
              src="https://miniso.com/vancheerfile/images/2024/3/20240306121923689.png"
              alt=""
            />
            <div>
              <p>Franchise Inquiries</p>
              <p className="font-bold text-xl text-black">Franchise@miniso.com</p>
            </div>
          </div>
  
          <div className="hidden lg:grid grid-cols-4 gap-5 [&_h6]:font-bold [&_h6]:hover:text-[#f12535] [&_h6]:text-black [&_h6]:mb-2 [&_p]:hover:text-[#f12535]">
            <div>
              <h6>Brand</h6>
              <p>Brand Profile</p>
              <p>News</p>
              <p>Contact Us</p>
            </div>
            <div>
              <h6>Product</h6>
              <p>IP Collaboration</p>
            </div>
            <div>
              <h6>Stores</h6>
              <p>Store Image</p>
              <p>E-Shop</p>
              <p>Global Market</p>
            </div>
            <div>
              <h6>Investors</h6>
              <p>Social Responsibility</p>
            </div>
          </div>
        </div>
  
        <div>
          <div className="flex gap-5 mb-3 mt-10">
            <img
              src="https://miniso.com/en/images/nimg44_3.png"
              alt=""
              className="aspect-square w-[30px] rounded-full bg-white p-1"
            />
            <img
              src="https://miniso.com/en/images/nimg44_4.png"
              alt=""
              className="aspect-square w-[30px] rounded-full bg-white p-1"
            />
          </div>
          
          <div>
            <p>
              Privacy Policy | Copyright © 2026
              MINISO(GUANGZHOU)Co.,Ltd粤ICP备2021004007号.
            </p>
            <p>Powered by vancheer</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
