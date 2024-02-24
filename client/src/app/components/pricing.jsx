function Pricing({ pricingRef }) {
    return <>
        <div ref={pricingRef} id='pricing' className="flex-col  py-8 px-2 white-wire">
            <h2 className="text-center text-4xl  blue-text aoboshi h-12 underline lg:my-12 ani-t2   mb-12 ">Pricing levels</h2>

            <div class="parent h-auto">
            <div className="flex flex-col gap-2 md:grid md:grid-cols-3 md:gap-8 md:pb-16">
            <div className="ani  flex flex-col bg-black items-center justify-center  rounded-md py-4 text-white my-2  px-2 md:w-full md:pt-24 md:h-full md:justify-start md:mt-12 flex-grow">
                <p className="rose text-center text-3xl">Standard</p>
                <p className="text-center">Best for small businesses</p>
                <p className="aoboshi text-3xl mt-4">$479</p>
                <a href="https://calendly.com/arsh0/15min" target="_blank" rel="noopener noreferrer" className="button crimson bg-blue-voilet my-4 text-center ">Get Started Today</a>
                <a href="https://calendly.com/arsh0/15min" target="_blank" rel="noopener noreferrer">Book a call</a>
                <hr className="border-dotted  w-24" />
                <br />
                <p className="my-4">Whats included</p>
                <ul className="forum text-lg pl-10 md:pl-6">
                    <li>Fully Responsive web design</li>
                    
                    <li>Social Media Integration</li>
                    <li>Email support </li>
                    <li>SSL certificate </li>
                    <li>Upto 5 web pages</li>
                    
                   
                
                   
                    
                   
                </ul>
            </div>

            <div className="ani  flex flex-col bg-black items-center justify-center  rounded-md py-4 text-white my-2 px-2 md:w-full md:pt-24 md:h-full md:justify-start flex-grow">
                <p className="rose text-center text-3xl">Pro</p>
                <p className="text-center">Best for small businesses</p>
                <p className="aoboshi text-3xl mt-4">$749</p>
                <a href="https://calendly.com/arsh0/15min" target="_blank" rel="noopener noreferrer" className="button crimson bg-blue-voilet my-4 text-center">Get Started Today</a>
                <a href="https://calendly.com/arsh0/15min" target="_blank" rel="noopener noreferrer">Book a call</a>

                <hr className="border-dotted  w-24" />
                <br />
                <p className="my-4">Whats included</p>
                <ul className="forum pr-6 text-lg pl-10 md:pl-6">
                <li>Everything in Standard plan +</li>
                <li>Custom Built UI/UX</li>
                <li>Keyword & On-Page Optimization</li>
                <li>Custom forms and Portfolio sections</li>
                <li>Lead Management</li>
                <li>Upto 10 web Pages</li>
                <li>Domain & web hosting included</li>
                </ul>
            </div>

            <div className="ani  flex flex-col bg-black items-center justify-center  rounded-md py-4 text-white my-2 px-2 md:w-full md:pt-24 md:h-full md:justify-start md:mt-12 flex-grow">
                <p className="rose text-center text-3xl">Custom</p>
                <p className="text-center">Best for small businesses</p>
                <p className="aoboshi text-3xl mt-4">$999</p>
                <a href="https://calendly.com/arsh0/15min" target="_blank" rel="noopener noreferrer" className="button crimson bg-blue-voilet my-4 text-center">Get Started Today</a>
                <a href="https://calendly.com/arsh0/15min" target="_blank" rel="noopener noreferrer">Book a call</a>
                <hr className="border-dotted  w-24" />
                <br />
                <p className="my-4">Whats included</p>
                <ul className="forum pr-6 pl-10 text-lg md:pl-6">
                    <li>Everything in Standard and Pro plans +</li>
                    <li>Unlimited Pages and scalabilty</li>
                    <li>Ecommerece Ready</li>
                    <li>Content Managements Systems </li>
                    <li>Customized reporting, event tracking, and conversion analysis</li>
                    <li>Custom dashboards, A/B testing</li>
                    <li>Regular Blog updates</li>
                    <li>AI chatbot integration</li>
                    <li>Payment Gateway</li>                   
                    <li>Google Analytics & Micrsoft clarity Integration </li>                               
                    <li>24/7 Premium Support</li>
                </ul>
            </div>
            </div>
            </div>
           

          
        </div>
    </>
}

export default Pricing