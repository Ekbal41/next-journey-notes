function Header() {
  return (
    <nav class="container d-flex justify-content-between mt-5">
      <img style={{
        marginTop: -10,
      }} src="/logo.svg" />
      <div>
        <button class="c-outline-btn mx-3 px-5">Log In</button>
        <button class="c-btn px-5 c-none">Sign Up</button>
      </div>
    </nav>
  );
}

export default Header;
