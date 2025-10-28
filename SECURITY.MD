# Security Policy

## Supported Versions

| Version      | Supported          |
| ------------ | ------------------ |
| 0.2.x        | :white_check_mark: |
| < 0.2.0      | :x:                |

## Security Update Process

- Security updates are released as patch versions for the currently supported version.
- Automated patching is performed via GitHub Actions once per week if not manually patched beforehand.
- The CI/CD pipeline (see `.github/workflows/vultr-container-registry.yml`) includes vulnerability scanning (Trivy) and blocks deployment if critical/high vulnerabilities are found, ensuring nothing is pushed that could be attacked.
- Behind the scenes, the project's GitHub account is also connected to Snyk for advisory vulnerability scanning and notifications (note: this is advisory and not a replacement for the primary security measures in place).

## Security-Related Configuration

This project includes the following security-focused configurations:

- **Content Security Policy (CSP):** Strict CSP headers recommended for deployment.
- **ESLint:** Security-focused linting rules enforced in CI.
- **Dependency Auditing:** NPM audit checks run automatically in CI/CD.
- **Automated Vulnerability Scanning:** Docker images are scanned for vulnerabilities before deployment.
- **Automated Patch Management:** Weekly GitHub Actions workflow checks for and applies security patches.
- **Access Control:** Only trusted maintainers can approve and merge security-related pull requests.
- **Environment Variables:** Sensitive configuration is managed via environment variables and not committed to source control.

For questions or to report vulnerabilities, please open a security issue or contact the maintainers directly.