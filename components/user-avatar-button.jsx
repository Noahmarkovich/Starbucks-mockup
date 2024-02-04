export function UserAvatarButton({
  sessionCookie,
  openUserMenu,
  logout,
  isUserMenuOpen,
  isMobile,
}) {
  return (
    <div>
      <button
        onClick={openUserMenu}
        disable={isMobile}
        className="user-avatar"
        style={{
          backgroundColor: sessionCookie.avatarColor ?? "pink",
        }}
      >
        {sessionCookie.email[0]}
      </button>
      {isUserMenuOpen && (
        <div onClick={logout} className="user-menu">
          Log out
        </div>
      )}
    </div>
  );
}
