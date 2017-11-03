using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using thuc_pham_sach_hd.EF;

namespace thuc_pham_sach_hd.Areas.Admin.Controllers
{
    public class SanPhamsController : Controller
    {
        private ThucPhamSachEntities db = new ThucPhamSachEntities();

        // GET: Admin/SanPhams
        public ActionResult Index()
        {
            var sanPham = db.SanPham.Include(s => s.DanhMuc).Include(s => s.NhaCungCap);
            return View(sanPham.ToList());
        }

        // GET: Admin/SanPhams/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            SanPham sanPham = db.SanPham.Find(id);
            if (sanPham == null)
            {
                return HttpNotFound();
            }
            return View(sanPham);
        }

        // GET: Admin/SanPhams/Create
        public ActionResult Create()
        {
            ViewBag.Id_DanhMuc = new SelectList(db.DanhMuc, "Id_DanhMuc", "TenDanhMuc");
            ViewBag.Id_NhaCC = new SelectList(db.NhaCungCap, "Id_NCC", "TenNCC");
            return View();
        }

        // POST: Admin/SanPhams/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id_SP,TenSP,Images,GiaBan,GiaNhap,SoLuong,Id_DanhMuc,Id_NhaCC,MoTa,NgayTao,NgayUpdaye,TrangThai")] SanPham sanPham)
        {
            if (ModelState.IsValid)
            {
                db.SanPham.Add(sanPham);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.Id_DanhMuc = new SelectList(db.DanhMuc, "Id_DanhMuc", "TenDanhMuc", sanPham.Id_DanhMuc);
            ViewBag.Id_NhaCC = new SelectList(db.NhaCungCap, "Id_NCC", "TenNCC", sanPham.Id_NhaCC);
            return View(sanPham);
        }

        // GET: Admin/SanPhams/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            SanPham sanPham = db.SanPham.Find(id);
            if (sanPham == null)
            {
                return HttpNotFound();
            }
            ViewBag.Id_DanhMuc = new SelectList(db.DanhMuc, "Id_DanhMuc", "TenDanhMuc", sanPham.Id_DanhMuc);
            ViewBag.Id_NhaCC = new SelectList(db.NhaCungCap, "Id_NCC", "TenNCC", sanPham.Id_NhaCC);
            return View(sanPham);
        }

        // POST: Admin/SanPhams/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id_SP,TenSP,Images,GiaBan,GiaNhap,SoLuong,Id_DanhMuc,Id_NhaCC,MoTa,NgayTao,NgayUpdaye,TrangThai")] SanPham sanPham)
        {
            if (ModelState.IsValid)
            {
                db.Entry(sanPham).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.Id_DanhMuc = new SelectList(db.DanhMuc, "Id_DanhMuc", "TenDanhMuc", sanPham.Id_DanhMuc);
            ViewBag.Id_NhaCC = new SelectList(db.NhaCungCap, "Id_NCC", "TenNCC", sanPham.Id_NhaCC);
            return View(sanPham);
        }

        // GET: Admin/SanPhams/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            SanPham sanPham = db.SanPham.Find(id);
            if (sanPham == null)
            {
                return HttpNotFound();
            }
            return View(sanPham);
        }

        // POST: Admin/SanPhams/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            SanPham sanPham = db.SanPham.Find(id);
            db.SanPham.Remove(sanPham);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
