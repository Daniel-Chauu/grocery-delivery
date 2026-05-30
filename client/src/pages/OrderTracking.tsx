import { ArrowLeft, MapPin } from "lucide-react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const OrderTracking = () => {
  return (
    <>
      <div className="mb-20 min-h-screen bg-app-cream">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button className="mb-6 flex items-center gap-2 text-sm text-app-text-light transition-colors hover:text-app-green">
            <ArrowLeft className="size-4" />
            Back to Orders
          </button>

          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-app-green">
                Order #CB96F2AE
              </h1>

              <p className="mt-1 text-sm text-app-text-light">
                Placed on May 12, 2026
              </p>
            </div>

            <span className="rounded-full bg-app-orange/10 px-4 py-1.5 text-sm font-semibold text-app-orange">
              Placed
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Left Side */}
            <div className="space-y-6 lg:col-span-2">
              {/* Map */}
              <div
                className="overflow-hidden rounded-2xl border border-app-border"
                style={{ height: 280 }}
              >
                <MapContainer
                  center={[10.7769, 106.7009]}
                  zoom={14}
                  scrollWheelZoom={false}
                  className="h-full w-full"
                >
                  <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  <Marker position={[10.7769, 106.7009]} />
                </MapContainer>
              </div>

              {/* Delivery Progress */}
              <div className="rounded-2xl bg-white p-6">
                <h2 className="mb-6 text-lg font-semibold text-app-green">
                  Delivery Progress
                </h2>

                {/* <div>
                  {deliverySteps.map((step, index) => {
                    const Icon = step.icon;
                    const isLast = index === deliverySteps.length - 1;

                    return (
                      <div key={step.title} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className={`flex-center size-9 shrink-0 rounded-full ${
                              step.active
                                ? "bg-app-green text-white ring-4 ring-app-green/20"
                                : "bg-app-cream text-app-text-light"
                            }`}
                          >
                            <Icon className="size-4" />
                          </div>

                          {!isLast && (
                            <div className="h-12 w-0.5 bg-app-border" />
                          )}
                        </div>

                        <div className="pb-6">
                          <p
                            className={`text-sm font-semibold ${
                              step.active
                                ? "text-app-green"
                                : "text-app-text-light"
                            }`}
                          >
                            {step.title}
                          </p>

                          {step.time && (
                            <p className="mt-0.5 text-xs text-app-text-light">
                              {step.time}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div> */}
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-5">
              {/* Address */}
              <div className="rounded-2xl bg-white p-5">
                <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-app-green">
                  <MapPin className="size-4" />
                  Delivery Address
                </h3>

                <p className="text-sm leading-relaxed text-app-text-light">
                  sdfssdfsdfs
                  <br />
                  asdasdasd
                  <br />
                  asdasdasd, asdasd asdasd
                </p>
              </div>

              {/* Items */}
              <div className="rounded-2xl bg-white p-5">
                <h3 className="mb-3 text-sm font-semibold text-app-green">
                  {/* Items ({orderItems.length}) */}
                </h3>

                <div className="space-y-3">
                  {/* {orderItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="size-10 rounded-lg object-cover"
                      />

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-app-green">
                          {item.name}
                        </p>

                        <p className="text-xs text-app-text-light">
                          x{item.quantity}
                        </p>
                      </div>

                      <span className="text-sm font-semibold">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  ))} */}
                </div>

                {/* Summary */}
                <div className="mt-4 space-y-1.5 border-t border-app-border pt-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-app-text-light">Subtotal</span>
                    <span>$835.00</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-app-text-light">Delivery</span>
                    <span>Free</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-app-text-light">Tax</span>
                    <span>$66.80</span>
                  </div>

                  <div className="flex justify-between border-t border-app-border pt-2 font-semibold text-app-green">
                    <span>Total</span>
                    <span>$901.80</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderTracking;
