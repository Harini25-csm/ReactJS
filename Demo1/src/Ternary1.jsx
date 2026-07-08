function Ter1() {
    const c1 = false;
    const c2 = true;
    const c3 = true;
    return (
        <div>
            <hr />
            <h1>Payment Verification</h1>
            {c1
                ? c2
                    ? c3
                        ? "Payment successful"
                        : "Entered PIN wrongly"
                    : "Scanned the QR wrongly"
                : "Payment failed"
            }
        </div>
    );
}
export default Ter1;

