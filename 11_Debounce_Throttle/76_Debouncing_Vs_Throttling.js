// Throttling
// So this is Throttling, where events occur after a certain time pnly - regardless of when
// and how many times they are actually fired
// E.g the mousemove event may occur 100 times in a second, but we configure the code in such a way,
// so that it gets executed only after 2 seconds and not 200 times

// Debouncing
// E.g mousemove event is configured to fire at every 1 second, provided there was no
// mousemove for 1 second
// If the mouse moves in half a second i.e, 500ms, then again wait for 1 more second

// Throttling is about firing event after every certain time
// whereas
// Debouncing will execute after every certain time provided in-between there was no event call
