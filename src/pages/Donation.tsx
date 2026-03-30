import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Heart,
  CreditCard,
  ShieldCheck,
  User,
  Mail,
  DollarSign,
  ArrowRight,
  CheckCircle2,
  Loader2,
  Info,
} from "lucide-react";
import { cn } from "@/src/lib/utils";

const presetAmounts = [10, 25, 50, 100, 500];

export default function Donation() {
  const [amount, setAmount] = useState<number | string>(50);
  const [isRecurring, setIsRecurring] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [progress, setProgress] = useState(65); // Mock progress

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const handleAmountClick = (val: number) => {
    setAmount(val);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDonation = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
    setProgress((prev) => Math.min(100, prev + 2));
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-slate-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-12 text-center"
        >
          <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-4">
            Thank You for Your Support!
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Your generous donation of{" "}
            <span className="font-bold text-primary">${amount}</span>{" "}
            {isRecurring ? "monthly" : ""} will make a significant impact on the
            lives of NDIS participants in our community.
          </p>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => (window.location.href = "/")}
              className="btn-primary py-4 w-full"
            >
              Return Home
            </button>
            <p className="text-sm text-slate-400">
              A receipt has been sent to {formData.email}
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-50">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column: Impact & Info */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-xs font-bold uppercase tracking-wider w-fit">
                <Heart size={14} className="fill-rose-600" />
                <span>Make a Difference</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Your Support Changes <span className="text-primary">Lives</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Every dollar donated helps us provide better support
                coordination, advocacy, and community connection for people with
                disabilities.
              </p>
            </motion.div>

            {/* Progress Bar */}
            {/* <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex justify-between items-end mb-4">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Monthly Goal
                  </span>
                  <span className="text-2xl font-extrabold text-slate-900">
                    $16,250{" "}
                    <span className="text-sm font-normal text-slate-400">
                      raised
                    </span>
                  </span>
                </div>
                <span className="text-primary font-bold">{progress}%</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
              <p className="mt-4 text-sm text-slate-500">
                Help us reach our $25,000 goal to expand our regional support
                services.
              </p>
            </div> */}

            {/* Impact Cards */}
            <div className="flex flex-col gap-4">
              {[
                {
                  amount: "$25",
                  impact: "Provides 1 hour of specialized advocacy support.",
                },
                {
                  amount: "$100",
                  impact:
                    "Funds a community connection workshop for 5 participants.",
                },
                {
                  amount: "$500",
                  impact:
                    "Supports a full transition plan for a new NDIS participant.",
                },
              ].map((item) => (
                <div
                  key={item.amount}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Info size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{item.amount}</p>
                    <p className="text-sm text-slate-500">{item.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Donation Form */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <form onSubmit={handleDonation} className="flex flex-col gap-8">
                  {/* Amount Selection */}
                  <div className="flex flex-col gap-6">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <DollarSign className="text-primary" size={20} />
                      Select Donation Amount
                    </h3>

                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                      {presetAmounts.map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => handleAmountClick(val)}
                          className={cn(
                            "py-3 rounded-xl font-bold transition-all border-2",
                            amount === val
                              ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                              : "bg-white border-slate-100 text-slate-600 hover:border-primary/30",
                          )}
                        >
                          ${val}
                        </button>
                      ))}
                    </div>

                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">
                        $
                      </span>
                      <input
                        type="number"
                        placeholder="Custom Amount"
                        value={
                          typeof amount === "number" &&
                          presetAmounts.includes(amount)
                            ? ""
                            : amount
                        }
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full pl-8 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-bold"
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-900">
                          Make this a monthly donation
                        </span>
                        <span className="text-xs text-slate-500">
                          Your support continues every month
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsRecurring(!isRecurring)}
                        className={cn(
                          "w-12 h-6 rounded-full transition-colors relative",
                          isRecurring ? "bg-primary" : "bg-slate-300",
                        )}
                      >
                        <div
                          className={cn(
                            "absolute top-1 w-4 h-4 bg-white rounded-full transition-all",
                            isRecurring ? "left-7" : "left-1",
                          )}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Donor Info */}
                  <div className="flex flex-col gap-6">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <User className="text-primary" size={20} />
                      Donor Information
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        required
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                      <input
                        required
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>

                  {/* Payment Info */}
                  <div className="flex flex-col gap-6">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <CreditCard className="text-primary" size={20} />
                      Payment Details
                    </h3>
                    <div className="flex flex-col gap-4">
                      <div className="relative">
                        <CreditCard
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          size={18}
                        />
                        <input
                          required
                          name="cardNumber"
                          placeholder="Card Number"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          required
                          name="expiry"
                          placeholder="MM/YY"
                          value={formData.expiry}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                        <input
                          required
                          type="password"
                          name="cvc"
                          placeholder="CVC"
                          value={formData.cvc}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <ShieldCheck size={14} className="text-emerald-500" />
                      Secure 256-bit SSL Encrypted Payment
                    </div>
                  </div>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary/20"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={24} />
                        Processing Donation...
                      </>
                    ) : (
                      <>
                        Complete Donation of ${amount}
                        <ArrowRight size={20} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
