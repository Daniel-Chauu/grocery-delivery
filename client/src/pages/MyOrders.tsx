import { Calendar, ChevronRight, Package } from "lucide-react";
import { Link } from "react-router-dom";

const MyOrders = () => {
  return (
    <section className="min-h-screen bg-app-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <h1 className="text-2xl font-semibold text-app-green  mb-6">
          My Orders
        </h1>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-app-green text-white rounded-xl text-sm font-semibold transition-colors whitespace-nowrap">
            All Orders
          </button>
          <button className="px-4 py-2 text-sm font-medium rounded-xl whitespace-nowrap transition-colors bg-white text-app-text-light hover:bg-app-cream">
            Placed
          </button>
          <button className="px-4 py-2 text-sm font-medium rounded-xl whitespace-nowrap transition-colors bg-white text-app-text-light hover:bg-app-cream">
            Out for Delivery
          </button>
          <button className="px-4 py-2 text-sm font-medium rounded-xl whitespace-nowrap transition-colors bg-white text-app-text-light hover:bg-app-cream">
            Delivered
          </button>
        </div>
        <div className="text-center py-16">
          <Package className="size-16 text-app-border mx-auto mb-4" />
          <h2 className="text-lg font-medium text-app-green mb-2">
            No orders yet
          </h2>
          <p className="text-sm text-app-text-light mb-4">
            Start shopping to see your orders here
          </p>
          <a
            className="inline-flex px-4 py-2 bg-app-green text-white text-sm rounded-lg"
            href="/products"
            data-discover="true"
          >
            Start Shopping
          </a>

          {/* If have any orders */}
          <div className="space-y-4">
            <Link
              to="/orders/kla9803jil"
              className="block max-w-4xl rounded-2xl bg-white p-5 transition-all hover:shadow"
            >
              {/* Header */}
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-app-green">
                    Order #CB96F2AE
                  </p>

                  <div className="mt-1 flex items-center gap-2">
                    <Calendar className="size-3 text-app-text-light" />

                    <span className="text-xs text-app-text-light">
                      May 12, 2026
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-blue-100 px-4 py-1 text-xs font-medium text-blue-700">
                    Placed
                  </span>

                  <ChevronRight className="size-4 text-app-text-light" />
                </div>
              </div>

              <div className="mb-3 flex items-center gap-2">
                <img
                  src="https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/spb5sgy8g24rned9nwog.png"
                  alt="Barley 1kg"
                  className="size-12 rounded-lg border border-app-border object-cover sm:size-16"
                />

                <img
                  src="https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/nb1mpxuo4fdcik6ey5yj.png"
                  alt="Mango 1 kg"
                  className="size-12 rounded-lg border border-app-border object-cover sm:size-16"
                />

                <img
                  src="https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/evuovl2nlwdjukosfz23.png"
                  alt="Basmati Rice 5kg"
                  className="size-12 rounded-lg border border-app-border object-cover sm:size-16"
                />

                <img
                  src="https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/vy1xa7zovcu22smzapzv.png"
                  alt="Brown Bread 400g"
                  className="size-12 rounded-lg border border-app-border object-cover sm:size-16"
                />
              </div>

              <div className="flex items-center justify-between pt-3 text-sm">
                <span className="text-app-text-light">4 items</span>

                <span className="font-semibold text-app-green">$901.80</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyOrders;
