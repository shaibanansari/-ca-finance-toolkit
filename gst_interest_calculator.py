def gst_interest(tax_amount, annual_rate, days):
    return round((tax_amount * annual_rate * days) / (365 * 100), 2)

tax = float(input("GST Amount: "))
days = int(input("Delay (days): "))

interest = gst_interest(tax, 18, days)

print(f"Interest Payable: ₹{interest}")
