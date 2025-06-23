{
  pkgs ? import <nixpkgs> { },
}:
pkgs.mkShell {
  nativeBuildInputs = with pkgs; [
    clojure
    gnumake
    cljstyle
    openjdk
  ];
}
