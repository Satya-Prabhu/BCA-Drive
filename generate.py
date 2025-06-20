import os
from pathlib import Path

def load_template():
    with open("template.html", "r", encoding="utf-8") as f:
        return f.read()

def get_download_button(href):
    return f'''
<a class="Btn download-button" href="{href}" download title="Download">
  <svg class="svgIcon" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
  </svg>
  <span class="icon2"></span>
  <span class="tooltip">Download</span>
</a>
'''

def generate_items(path: Path):
    folders = []
    files = []

    for entry in sorted(path.iterdir()):
        if entry.name in {"index.html", "template.html", "generate.py"} or entry.name.startswith("."):
            continue

        icon = "📂" if entry.is_dir() else "📄"
        css_class = "folder-icon" if entry.is_dir() else "file-icon"
        href = entry.name + "/" if entry.is_dir() else entry.name
        download = "" if entry.is_dir() else get_download_button(href)

        item_html = f"""
        <div class="file-link">
          <a href="{href}" class="file-preview">
            <span class="{css_class}">{icon}</span> {entry.name}
          </a>
          {download}
        </div>"""

        if entry.is_dir():
            folders.append(item_html.strip())
        else:
            files.append(item_html.strip())

    return "\n".join(folders + files)

def generate_index(folder: Path, template: str, is_root=False):
    file_items = generate_items(folder)
    title = "BCA Drive" if is_root else folder.name
    html = template.replace("{{file_items}}", file_items).replace("{folder}", title)

    with open(folder / "index.html", "w", encoding="utf-8") as f:
        f.write(html)

    print(f"✅ index.html generated in: {folder}")

def main():
    base = Path(".")
    template_path = base / "template.html"

    if not template_path.exists():
        print("❌ template.html not found!")
        return

    template = load_template()

    for folder in base.glob("**/"):
        if folder.is_dir():
            generate_index(folder, template, is_root=(folder == base))

if __name__ == "__main__":
    main()
