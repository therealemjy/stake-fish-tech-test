// Breakpoints are expressed in pixels. Note that we don't use BASE_SIZE to
// define them, as even if we were to update the base size the breakpoints would
// need to remain the same.
enum Breakpoint {
  // Since our design is mobile-first, we don't need to specify a break point
  // for mobile as it is assumed to be the default device size.
  tablet = '481',
  desktop = '1025',
}

export default Breakpoint;
